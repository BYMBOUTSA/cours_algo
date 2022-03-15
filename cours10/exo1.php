<?php

$firstname = "Jean-Baptiste";

$lengthFirstname = strlen($firstname);

echo "Votre prénom a ".$lengthFirstname." caractères \n";


$first3LetterFirstname = substr($firstname, 0, 3);
echo $first3LetterFirstname."\n";



$jeanInFirstname = strpos($firstname, "Jean");

if($jeanInFirstname === false) {
  echo "Pas de Jean dans le prénom";
}
else {
  echo "Jean à la position ".$jeanInFirstname;
}








 ?>
