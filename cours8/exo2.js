
// Programme qui permet de donner les nombres paires d'un tableau
/*function getEven(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      console.log(nums[i])
    }
  }

}


let nums = [3, 5, 12, 4, 9]
getEven(nums)*/



// Fonction pour donner la somme des nombres paires de notre tableau ainsi que le nombre de chiffres paires
function getEven(nums) {
  let sum = 0, count = 0
  for(let i = 0; i < nums.length; i++) {

      console.log(nums[i])
      if(nums[i] % 2 === 0) {
        sum += nums[i]

        count += 1
      }
  }
  return [sum, count]

}


let numbers = [3, 5, 12, 4, 9]
// Appel de la fonction getEven(numbers)
let sumandcount = getEven(numbers)
console.log(sumandcount) // çà affiche nos deux éléments dans un tableau
alert("Somme de mes nombres pairs " + sumandcount[0])
alert("Nombre de mes chiffres pairs " + sumandcount[1])
