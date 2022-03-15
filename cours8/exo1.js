
function getDiscountPrice(price, discountPourcentage) {
  let newDiscountPrice = price - price * discountPourcentage / 100
  console.log("Prix final:" + newDiscountPrice)
  // Afficher newDiscountPrice
  return newDiscountPrice
}

// Appel de la fonction getDiscountPrice(12, 50)
let firstCustmers = getDiscountPrice(12, 50)

// J'aimerais transmettre le prix final au caissier, pour qu'il puisse demander la tune...
alert("Caisseir: OK TU ME DOIS " + firstCustmers + " Euros!")

//Appel getDiscountPrice(20, 30)
getDiscountPrice(20, 30)
