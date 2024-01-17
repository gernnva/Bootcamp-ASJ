import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Ejercicio3 {

	static ArrayList<Integer> numeros = new ArrayList<>();
	static ArrayList<Integer> numerosImpares = new ArrayList<>();
	
	
	public static void main(String[] args) {
		
		generadorNumeros();
		Collections.sort(numeros);
		Collections.sort(numerosImpares);
		ArrayList<Integer> numerosTodos = new ArrayList<>(numeros);
		numerosTodos.addAll(numerosImpares);
		
		System.out.println(numerosTodos);
		
	}
	
	public static void generadorNumeros() {
		Random rnd = new Random();
		for (int i = 0; i < 20; i++) {
			int num = rnd.nextInt(101);
			
			if (num % 2 == 0) {
				numeros.add(num);
				
			} else {
				numerosImpares.addLast(num);
			}
		}
		
		
		

		
		
		
		
		
		
		
		
	}

}
