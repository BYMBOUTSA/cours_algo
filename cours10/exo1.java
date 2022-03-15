import java.io.*;

public class Test {
  public statis void main(string args[]) {
    string firstname = "Jean-Baptiste";

    int lengthFirstname = firstname.length();

    system.out.println( "Votre prénom a " + lengthFirstname + " caractères");


    string first3LetterFirstname = firstname.substring(0, 3);
    system.out.println("Trois premières lettres de votre prénom: " + first3LetterFirstname);



    int indexSubstringFirstname = firstname.indexOf("Jean");

    if(indexSubstringFirstname == -1) {
      system.out.println("Pas de Jean dans le prénom");
    }
    else {
      system.out.println("Jean à la position " + indexSubstringFirstname);
    }

  }
}
