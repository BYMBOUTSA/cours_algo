

def getDiscountPrice(price, discountPourcentage):
    newDiscountPrice = price - price * discountPourcentage / 100
    print("Prix total : " + str(newDiscountPrice))
    return newDiscountPrice

# Appel de la fonction getDiscountPrice(12, 50)
firstCustomer = getDiscountPrice(12, 50)

print('Caissier : OK TU ME DOIS ' + str(firstCustomer) + " Euros !")
