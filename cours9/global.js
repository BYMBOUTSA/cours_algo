/* Fonction d'appel */
function appelVers(destination) {
  let msg = "Coucou"
  console.log(msg + " Je téléphone depuis " + villeTelFixe + " vers " + destination)
}

/* fonction raccrocher */
function raccrocher() {
  console.log(villeTelFixe + " a raccroché")
}


let villeTelFixe = "Lyon"

// appel vers Lille
appelVers("Lille")

// raccrocher
raccrocher()
