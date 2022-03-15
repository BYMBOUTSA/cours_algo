from random import uniform

min = 1
max = 3

nb = uniform(min, max) # Permet de donner un nombre aléatoire avec pas mal de chiffres après la virgule
print(nb)

nb3Digits = round(nb, 3) # Permet d'arrondir le nombre à 3 chiffres après la virgule
print(nb3Digits)

nbInt = int(nb) # Permet de faire un castrage de notre nombre en prenant juste çà partie entière
print(nbInt)
