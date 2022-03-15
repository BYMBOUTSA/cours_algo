<?php

$lang = readline("Entrer language : ");

if($lang === "fr") {
    echo "Kikoo les gens \n";
}
else if($lang === "en") {
    echo "Hello world ! \n";
}
else if($lang === "es") {
    echo "Hola \n";
}
else {
    echo "Lang no found \n";
}