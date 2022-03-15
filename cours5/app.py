nb = int(input('Entrez un nombre : '))

while nb < 1 or nb > 3:
    nb = int(input('Erreur ! Entrez un nombre : '))
    print("Coucou")
print(nb)
