import java.util.Iterator;
import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int[] numeros = new int[5];
		int[] numerosCambiados = new int[5];
		
		for(int i = 0; i < numeros.length; i++) {
			System.out.println("Ingrese el num en posicion " + (i+1));
			numeros[i] = sc.nextInt();	
		}
		
		for(int i = 0; i < numeros.length-1; i++) {
			numerosCambiados[i+1] = numeros[i]; 
		}
		numerosCambiados[0] = numeros[numeros.length-1];
		
		System.out.println("Nuevo Array ");
		for (int i : numerosCambiados) {
			System.out.print("["+i+"] ");
		}
	}

}
