# Fonction d'appel
def appelVers(destination):
    msg = "Coucou"
    print(msg + " Je téléphone depuis " + villeTelFixe + " vers " + destination)


# fonction raccrocher
def raccrocher():
    print(villeTelFixe + " a raccroché")



villeTelFixe = "Lyon"

# appel vers Lille
appelVers("Lille")

# raccrocher
raccrocher()
