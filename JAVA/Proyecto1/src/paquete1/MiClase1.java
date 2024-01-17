package paquete1;

import java.util.Scanner;

public class MiClase1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.println("Ingresa una cadena: ");
        String cadena = scanner.nextLine();

        System.out.println("Valores ASCII de cada caracter en la cadena:");
        System.out.println("--------------------------------------------");
        

        for (int i = 0; i < cadena.length(); i++) {
            char c = cadena.charAt(i);

            System.out.println("Letra: " + c + ", Valor ASCII: " + ((int) c));
        }
        scanner.close();
	}

}
