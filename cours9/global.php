<?php

$villeTelFixe = "Lyon";

function appelVers($destination) {
  global $villeTelFixe;
  $msg = "Coucou";
  echo $msg." Je téléphone depuis ". $villeTelFixe." vers ". $destination;
}

appelVers("Lille");
appelVers("Paris");



 ?>
