<?php
$tab = [13, 17, 9, 3];
print_r($tab);

for($i = 0; $i < count($tab)-1; $i++) {
  echo "Valeur de i: " .$i ."\n";
  for($j= 0; $j < count($tab)-1-$i; $j++) {
    echo "j: " .$tab[$j] ." comparé à j + 1:" .$tab[$j+1]."\n";
    if($tab[$j] > $tab[$j+1]) {
      echo "j: " .$tab[$j] ." et j + 1: " .$tab[$j+1] ." à permuter!"."\n";

      $temp = $tab[$j+1];
      $tab[$j+1] = $tab[$j];
      $tab[$j] = $temp;
    }
  }

}
print_r($tab);
