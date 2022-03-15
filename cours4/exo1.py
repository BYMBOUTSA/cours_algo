hour = int(input('Entrez un nombre entre 0 et 24 : '))

if hour >= 0 and hour < 6:
    print('Bonne nuit')
elif hour >= 6 and hour < 12:
    print('Passe une bonne matinée')
elif hour >= 12 and hour < 18:
    print('Passe une bonne après-midi')
elif hour >= 18 and hour < 24:
    print('Une bonne soirée')
else:
    print('MAIS IL ET FOU')