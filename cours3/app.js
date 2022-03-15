// variables nombre1, nombre2 en numérique
let nb1, nb2

// Lire nombre1
nb1 = Number(prompt("Entrez un nombre 1 "))
// Lire nombre2
nb2 = Number(prompt("Entrez un nombre 2 "))
// si nombre1 > nombre2
// Alors
//      Ecrire "Le nombre 1 est le plus grand"
//       Ecrire "coucou"
if(nb1 > nb2) {
    alert("Le nombre 1 est le plus grand")
}
// si nombre2 > nombre1:
// Alors
//      Ecrire "Le nombre 2 est le plus grand"
else if(nb1 < nb2) {
    alert("Le nombre 2 est le plus grand")
}
// si nombre1 == nombre2:
// Alors
//     Ecrire "Les deux nombres sont égaux" 
else {
    alert("Les deux nombres egaux")
}

