#include <iostream>
using namespace std;

int add(int a, int b) {
  return a + b;
}




int main() {
  int x, y;
  cin >> x; // Pour demander à notre utilisateur de saisir du contnu
  cin >> y;

  int sum = add(x, y);

  cout << sum;

  return 1;
}

// Pour compiler notre code en c++ on crée un fichier d'exécution avec g++ global.cpp -o global et ensuite on compile avec la commande ./global
