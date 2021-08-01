<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{

    #[Route('/register', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository): Response
    {
        $status = 400;
        $user = new User();
        $context = ['groups' => ['private']];
        $form = $this->createForm(RegistrationFormType::class, $user);
        $request->request->add([$form->getName() => json_decode($request->getContent(), true)]);
        try {
            if ($form->handleRequest($request) && $form->isSubmitted() && $form->isValid()) {
                $hash = $passwordHasher->hashPassword($user, $form->get('password')->getData());
                $userRepository->upgradePassword($user, $hash);
                $status = 201;
            }
        } catch (OptimisticLockException | ORMException $e) {
            $status = 500;
        }
        return $this->json($user, $status, [], $context);
    }

}
