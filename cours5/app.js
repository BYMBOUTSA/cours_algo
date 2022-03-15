let nb

nb = Number.parseInt(prompt("Entrez un nombre : "))

while(nb < 1 || nb > 3) {
    nb = Number.parseInt(prompt("Erreur ! Entrez un nombre : "))
    console.log("Coucou !");
}
alert(nb)