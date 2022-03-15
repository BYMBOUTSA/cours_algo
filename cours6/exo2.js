let nb

nb = Number.parseInt(prompt("Entrez un nombre : "))

console.log('Table de ' + nb)

for(let i = 1; i <= 10; i++) {
    console.log(nb + " x " + i +  " =  " + nb * i)
}