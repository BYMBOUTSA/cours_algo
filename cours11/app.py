grosCarton = [
  ['chaussette1', 'chaussette2'],
  [['pulldete1', 'pulldete2'], ['pulledhiver1', 'pulledhiver2']],
  ['slip1'],
  ['pantalon1', 'pantalon2', 'pantalon3', 'pantalon4']
]

#console.log(grosCarton);

print(grosCarton[1][1][0]) # pour voir les truc sous la forme d'u Tableau

#for i in range(len(grosCarton)):
    #for j in range(len(grosCarton[i])):
        #print(grosCarton[i][j])

for compartiment in grosCarton:
    for petiteBoite in compartiment:
        print(petiteBoite)

#for(let i = 0; i < grosCarton.length; i++) {
  #console.log(grosCarton[i]);

  #for(let j = 0; j < grosCarton[i].length; j++) {
    #console.log(grosCarton[i][j]);

    # for(k = 0)
  #}
#}


#for(let i = 0; i < grosCarton.length; i++) {
  #console.log(grosCarton[i]);
#}
#grosCarton.forEach(function(compartiment) {
  #console.log(petiteBoite);
#})



#grosCarton.forEach(function(compartiment) {
  #compartiment.forEach(function(petiteBoite) {
    #console.log(petiteBoite);
  #})
#})
