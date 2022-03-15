notes = []

sum = 0



for i in range(0, 9):
	notes.append(float(input("Entrez une note : ")))
	print(notes)


	if i == 0 or notes[i] > bestNote:
		bestNote = notes[i]


	sum += notes[i]
	print(sum)



moy = sum / len(notes)
"""print("Moyenne : ", moy)
print("Meilleures notes : ", bestNote)"""


print("Moyenne : " + str(moy))
print("Meilleures notes : " + str(bestNote))




