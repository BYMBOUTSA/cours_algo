max = -1
nb = 0

while nb != -1:
    nb = float(input("Entrez un nombre ou -1 pour terminer : "))
    print(nb)
    if nb > max:
        max = nb
    
print('Nombre maximum : ' , max)



