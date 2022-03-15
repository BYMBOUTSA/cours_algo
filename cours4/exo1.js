// variable hour en nombre
let hour


hour = Number(prompt('Entrez un nombre entre 0 et 24 : '))

if (hour >= 0 && hour < 6) {
    alert('Bonne nuit')
}  
else if(hour >= 6 && hour < 12) {
    alert('Passe une bonne matinée')
}  
else if (hour >= 12 && hour < 18) {
    alert('Passe une bonne après-midi')
}   
else if (hour >= 18 && hour < 24) {
    alert('Une bonne soirée')
} 
else {
    alert('MAIS IL ET FOU')
}
    