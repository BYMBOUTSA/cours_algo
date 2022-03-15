let notes = []

let sum = 0

let moy, bestNote

for(let i = 0; i < 9; i++) {
	notes[i] = Number(prompt("Entrez une note : "))
	console.log(notes)


	/*if(i === 0) {
		bestNote = notes[i]
	}
	else if(notes[i] > bestNote) {
		bestNote = notes[i]
	}*/

	if(i === 0 || notes[i] > bestNote) {
		bestNote = notes[i]
	}


	sum += notes[i]
	console.log(sum)
}


moy = sum / notes.length

alert("Moyenne : " + moy)
alert("Meilleures notes : " + bestNote)