let min = 1;
let max = 3;

let nb = (Math.random()*(max-min) + min); // Permet de donner un nombre aléatoire avec pas mal de chiffres après la virgule
console.log(nb);

let nb3Digits = nb.toFixed(3); // Permet d'arrondir le nombre à 3 chiffres après la virgule
console.log(nb3Digits);

let nbInt = parseInt(nb); // Permet de faire un castrage de notre nombre en prenant juste çà partie entière
console.log(nbInt);
