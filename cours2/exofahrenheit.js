// On va demander une température en celsius à l'utilisateur
let inputCelsius, outputFahrenheit

// Ecrire "Entrez une température"
//Lire inpulCelsius
inputCelsius = Number(prompt("Entrez une température en °C"))


// (0 °C × 9/5) + 32 = 32 °F
outputFahrenheit = (inputCelsius * 9/5) + 32


alert("Mon équivalent en Fahrenheit: " + outputFahrenheit + " °F")
