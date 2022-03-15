let nb, max = -1


while(nb !== -1) {
    nb = Number.parseInt(prompt("Entrez un nombre : "))
    console.log(nb);
    if(nb > max) {
        max = nb
    }
}
alert("Nombre maximum : " +max)



