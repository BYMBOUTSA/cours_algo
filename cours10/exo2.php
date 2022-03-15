<?php


$min = 1;
$max = 3;

$nb = rand($min*10, $max*10)/10; # Permet de donner un nombre aléatoire avec pas mal de chiffres après la virgule
echo $nb."\n";

$nb3Digits = number_format($nb, 3); # Permet d'arrondir le nombre à 3 chiffres après la virgule
echo $nb3Digits."\n";

$nbInt = intval($nb); # Permet de faire un castrage de notre nombre en prenant juste çà partie entière
echo $nbInt."\n";






 ?>
