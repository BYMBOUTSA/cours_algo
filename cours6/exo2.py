nb = int(input('Entrez un nombre : '))

print('Table de ', nb)

for i in range(1, 10):
    print(str(nb) + ' x ' + str(i) + ' = ' + str(nb * i))