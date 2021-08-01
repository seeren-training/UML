<?php

use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-API-KEY, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');

if ('OPTIONS' === $_SERVER['REQUEST_METHOD']) {
    die();
}

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
