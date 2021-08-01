# 🎓  TP - UML

**Vous allez être évalués sur votre capacité à rédiger les documents 📝 suivants.**

Vous pouvez utiliser les diagrammes suivants: `cas d'utilisation`, `package`, `classe`, `séquence`, `activité`, `déploiement`, dans une conception de projet décidé que vous codez en parallèle.

### **Précédement**

Vous avez conceptualisé un programme front-end et l'avez codé en vous appuyant sur vos décisions. Puis vous avez travaillé sur la notion de `web service` et avez crée un `endpoint` qui intercepte une requête en JSON testée sur Postman et renvoie l'objet intercepté avec un status 201 pour la création, 400 en cas de requête invalide et 500 en cas d'erreur interne.

### **Maintenant**

Vous allez `modéliser` votre programme back end et allez implémentez en code le rapport entre le front et le back.

___

## 👨🏻‍💻 Modélisation

Le sujet de la modélisation est la création d'un compte sur Symfony orienté web service. Vous devez produire les éléments suivants pour afiner votre représentation et soigner votre présentation

* 📝 **Un diagramme de classe**: Représentez vos classes et celles classes du framework directement utilisées par les votres en détaillant les méthodes utilisées uniquement.

* 📝 **Un diagramme de séquence**: Utilisez le fragment combiné.

* 📝 **Un diagramme d'activité**: Représentez la méthode de création de compte.

___

## 👨🏻‍💻 Code

En JavaScript, utilisez le `endpoint` permettant de créer un compte!

* 📝 Ajoutez des contraintes à vos input avec `required`, `type` et `minlength`.
* 📝 Réglez les problèmes pouvant survenir comme `CORS`...
* 📝 En cas de code **201**, faites une alert, "Account created".
* 📝 En cas de code **400**, affichez, "Account already exists".
* 📝 En cas de code **500**, affichez, "An error occurs".

___

## 🕕 Gérez votre temps