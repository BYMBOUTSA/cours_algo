#importation du module math
import math

#Stocker le rayon d'un cercle
inputRadius = float(input("Entrez le rayon d'un cercle: "))
# On va faire en sorte d'obtenir le périmètre du cercle
ouputPerimeter = 2*math.pi*inputRadius
print("Le périmètre, c'est: " + str(round(ouputPerimeter,2)))