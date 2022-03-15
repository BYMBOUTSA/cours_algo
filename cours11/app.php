<?php
$grosCarton = [
  ['chaussette1', 'chaussette2'],
  [['pulldete1', 'pulldete2'], ['pulledhiver1', 'pulledhiver2']],
  ['slip1'],
  ['pantalon1', 'pantalon2', 'pantalon3', 'pantalon4']
];

//console.log(grosCarton);

echo $grosCarton[1][1][0]; // pour voir les truc sous la forme d'u Tableau

print_r($grosCarton);

//for($i = 0; $i < count($grosCarton); $i++) {
  //console.log(grosCarton[i]);

  //for($j = 0; $j < count($grosCarton[$i]); $j++) {
    //echo $grosCarton[$i][$j];

    // for(k = 0)
  //}
//}

foreach($grosCarton as $compartiment) {
  foreach ($compartiment as $petiteBoite) {
    echo $petiteBoite."\n";
  }
}


//for(let i = 0; i < grosCarton.length; i++) {
  //console.log(grosCarton[i]);
//}
