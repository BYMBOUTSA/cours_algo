firstname = "Jean-Baptiste"

lengthFirstname = len(firstname);

print( f"Votre prénom a {lengthFirstname} caractères")


first3LetterFirstname = firstname[0:3]
print(first3LetterFirstname)



jeanInFirstname = firstname.find("Jean")

if jeanInFirstname == -1:
  print("Pas de Jean dans le prénom")

else:
  print(f"Jean à la position   {jeanInFirstname}")
