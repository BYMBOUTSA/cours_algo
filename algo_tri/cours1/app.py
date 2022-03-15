tab = [13, 17, 9, 3]
print(tab)

for i in range(len(tab)-1):
    print(f"Valeur de i: {i}")
    for j in range(len(tab)-1-i):
        print(f"j: {tab[j]} comparé à j + 1: {tab[j+1]}")
        if tab[j] > tab[j+1]:
            print(f"j:  {tab[j]} et j + 1: {tab[j+1]} à permuter!")
            temp = tab[j+1]
            tab[j+1] = tab[j]
            tab[j] = temp

print(tab)
