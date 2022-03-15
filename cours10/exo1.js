let firstname = "Jean-Baptiste";

let lengthFirstname = firstname.length;

console.log( "Votre prénom a " + lengthFirstname + " caractères");


let first3LetterFirstname = firstname.substring(0, 3);
console.log(first3LetterFirstname);



let jeanInFirstname = firstname.indexOf("Jean");

if(jeanInFirstname === -1) {
  console.log("Pas de Jean dans le prénom");
}
else {
  console.log("Jean à la position " + jeanInFirstname);
}
