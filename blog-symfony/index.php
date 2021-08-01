<?php

var_dump($_SERVER);



$url = filter_input(INPUT_SERVER, "REDIRECT_URL");
if (!$url) {
    $url = filter_input(INPUT_SERVER, "PATH_INFO") ?? "/";
}


if ($url === "/home") {
    // activer le controller de home et sa méthode
}else if ($url === "/contact") {
    // activer le controller de /contact et sa méthode
}