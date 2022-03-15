let nb, bill10 = 0, bill50 = 0, bill5 = 0

nb = Number.parseInt(prompt("Entrez un nombre entre 1 et 99 : "))

if(nb >= 50) {
    nb = nb - 50
    bill50 = bill50 + 1
}

while(nb >= 10) {
    nb = nb - 10
    bill10 = bill10 + 1
}

if(nb >= 5) {
    nb = nb - 5
    bill5 = bill5 + 1
}

alert("Le nombre de billet(s) de 50 est " +bill50 +
        "\nLe nombre de billet(s) de 10 est " + bill10 +
        "\nLe nombre de billet(s) de 5 est " + bill5 + 
        "\nLe montant restant est de " + nb +"€")

