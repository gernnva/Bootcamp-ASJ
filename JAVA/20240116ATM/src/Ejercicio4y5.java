import java.util.HashSet;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio4y5 {

	static HashSet<Integer> numerosGenerados = new HashSet<>();
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {

		int[][] matriX = new int[3][3];
		numsNoRepetidos();
		int acumulador = 0;

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				Integer[] numerosArray = numerosGenerados.toArray(new Integer[0]);

				matriX[i][j] = numerosArray[acumulador];
				acumulador++;
			}
		}

		for (int i = 0; i < matriX.length; i++) {
			for (int j = 0; j < matriX[i].length; j++) {
				System.out.print("[" + matriX[i][j] + "]");
			}
			System.out.println();
		}
		
		System.out.println("Queres sumar una fila o una columna");
		String seleccion = sc.nextLine();
		switch (seleccion) {
		case "fila":
			System.out.println("que fila?");
			Integer seleccionFila  = sc.nextInt();
			Integer totalFila = 0;
			for(int i = 0; i< 3; i++) {
				totalFila = totalFila + matriX[seleccionFila-1][i];
			}
			System.out.println("El total es: " + totalFila);
			break;
		case "columna":
			System.out.println("que columna?");
			Integer seleccionColumna  = sc.nextInt();
			Integer totalCol = 0;
			for(int i = 0; i< 3; i++) {
				totalCol = totalCol + matriX[i][seleccionColumna-1];
			}
			
			System.out.println("El total es: " + totalCol);
			break;

		default:
			break;
		}

	}
	
	

	public static void numsNoRepetidos() {

		Random rnd = new Random();
		do {
			int num = rnd.nextInt(101);
			numerosGenerados.add(num);
		} while (numerosGenerados.size() < 9);

	}

}
