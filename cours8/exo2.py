# Fonction pour donner des nombres paires de notre tableau ainsi que le nombre de chiffres paires
def getEven(nums):
    sum = 0
    count = 0

    for i in range(0, len(nums)):
        print(nums[i])
        if nums[i] % 2 == 0:
            sum += nums[i]
            count += 1
    return [sum, count]


numbers = [3, 5, 12, 4, 9]

# Appel de la fonction getEven(numbers)
sumandcount = getEven(numbers)
print(sumandcount)
print('Somme de mes nombres pairs ' + str(sumandcount[0]))
print('Nombre de mes chiffres pairs ' + str(sumandcount[1]))
