package paquete1;

import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
/*		
		System.out.println("¿Cuántas notas quiere ingresar?");
		
		int cantNotas = sc.nextInt();
		
		while (cantNotas > 4 || cantNotas < 0) {
			System.out.println("Tienen que ser menos de 5 notas. no puede ser negativo! \nIntente nuevamente");
			cantNotas = sc.nextInt();

		}
		int contador = 0;
		int[] notas = new int[cantNotas];
		int totalNotas = 0;

		do {
		    System.out.println("Ingrese la nota " + (contador + 1));
		    int nota = sc.nextInt();

		    if (nota >= 1 && nota <= 10) {
		        notas[contador] = nota;
		        contador++;
		    } else {
		        System.out.println("Escriba bien señor... ");
		    }

		} while (contador < notas.length);
		
		for(int i = 0; i < notas.length; i++) {
			totalNotas = totalNotas + notas[i];
			
		}
		System.out.println("Promedio es: " + ((double) totalNotas/ notas.length));
*/
//		EJERCICIO 1
//		Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
		
/*		
		System.out.println("Introduce el primer ángulo:");
        int angulo1 = sc.nextInt();

        System.out.println("Introduce el segundo ángulo:");
        int angulo2 = sc.nextInt();

        System.out.println("Introduce el tercer ángulo:");
        int angulo3 = sc.nextInt();

        // Comprobar si la suma de los ángulos es 180
        if ((angulo1+angulo2+angulo3)== 180) {
            System.out.println("Los ángulos introducidos forman un triángulo válido.");
        } else {
            System.out.println("Los ángulos introducidos no forman un triángulo válido.");
        }
*/
		
//		EJERCICIO 2
//		Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
/*		
		System.out.print("Ingrese una cadena: ");
        String entradaUsuario = sc.nextLine();
        
        if (Character.isDigit(entradaUsuario.charAt(0))) {
            System.out.println("El string comienza con un número.");
        } else if (Character.isLetter(entradaUsuario.charAt(0))) {
            System.out.println("El string comienza con una letra.");
        } else {
            System.out.println("El primer carácter no es ni un número ni una letra.");
        }
*/        
        
//		EJERCICIO 3	
//		Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
/*		
		
		
        System.out.print("Ingrese el valor del primer Num: ");
        int n = sc.nextInt();

        System.out.print("Ingrese el valor del segundo Num: ");
        int m = sc.nextInt();
		
        int total = 0;
        
        for (int i = n+1; i < m; i++) {
            if (i % 2 == 0) {
                total += i;
            }
        }
        System.out.println("La suma de los numeros pares es: " + total);
*/        
//		EJERCICIO 4
//		Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a
//      la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
/*        
		System.out.print("Ingrese un número: ");
        int numero = sc.nextInt();
        
        int sumaDivisores = 0;

        // Iterar desde 1 hasta la mitad del número
        for (int i = 1; i <= numero / 2; i++) {
            // Verificar si i es un divisor del número
            if (numero % i == 0) {
            	System.out.println(i);
                sumaDivisores += i;
            }
        }
        
        if (sumaDivisores == numero) {
            System.out.println(numero + " ---> es un número perfecto.");
        } else {
            System.out.println(numero + " ---> no es un número perfecto.");
        }
*/        
//      EJERCICIO 5
//		Recrear el cuadro de la imagen que esta en Discord
		
		
		
		
		
	}

}
