import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in).useDelimiter("\r?\n");
/*		System.out.println("Ingrese un Integer");
		Integer num = sc.nextInt();
		System.out.println("Ingrese un Double");
		Double numD = sc.nextDouble();
		System.out.println("Ingrese un String");
		String str = sc.next();
		sc.close();
		
		System.out.println("String;" + str);
		System.out.println("Double;" + numD);
		System.out.println("Integer;" + num);
		
*/
/*		solucion de gonza
		Scanner scanner = new Scanner(System.in).useDelimiter("\r?\n");//investigar \r?
		System.out.println("Ingrese un numero: ");
		int num = scanner.nextInt();
		System.out.println("Ingrese un double: ");
		double dou = scanner.nextDouble();
		System.out.println("Ingrese un string: ");
		String str ="";
		str+= scanner.next();

		scanner.close();

		System.out.println("String: " + str);
		System.out.println("Double: " + dou);
		System.out.println("Int: " + num);
	*/	
		
	/*	System.out.println("Ingrese un numero");
		Integer num = sc.nextInt();
		
		sc.close();
		if(num%2 == 0 ) {
			System.out.println("Raro");	
		} else if (num >= 2 && num <=5) {
			System.out.println("No Raro");
		} else if (num >= 6 && num <=20) {
			System.out.println("Raro");
		} else {
			System.out.println("No Raro");
		}

		*/
		
		int num = 0;
		do {
			System.out.println("Ingrese un numero entre 1 y 21");
			num=sc.nextInt();
			System.out.println();
			for (int i = 1; i <= 10; i++ ) {
				System.out.println(num + "  x " + i + " = " + num*i);
			}
			
			
		} while ((num <=2) && (num >=20) );
		// corregir
		
		
		
		
		
		
		
		
	}

}
