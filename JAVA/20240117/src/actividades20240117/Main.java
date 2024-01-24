package actividades20240117;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	static ArrayList<String> contrasenas = new ArrayList<String>();
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {

		

		Operacion operacion = new Operacion(30,15, '*');
		System.out.println(operacion.calculo());
		
		Operacion operacion2 = new Operacion(20,0, '/');
		System.out.println(operacion2.calculo());
/*		
		Operacion operacion2 = new Operacion(1,5);
		System.out.println(operacion2.calculo());
*/
/*
 * //-------------------------------------------------------------------------------------------	
		Cuenta cuenta1 = new Cuenta("Shakira");
		
		System.out.println(cuenta1.toString());
		
		cuenta1.ingresar(230.32);
		System.out.println(cuenta1.toString());
		
		cuenta1.retirar(100);
		System.out.println(cuenta1.toString());
*/
		//-------------------------------------------------------------------------------------------
/*
		Password pass1 = new Password(36);
		
		System.out.println(pass1.esFuerte(pass1.getContrasena()));
		
		
		ingresarPass();
		System.out.println("------------------------------");
		System.out.println(pass1.esFuerte(contrasenas.get(0)) ? "FUERTE" : "DEBIL");
		

	}
	
	static public void ingresarPass() {
		boolean bandera = true;
		
		do {
			
			System.out.println("Ingrese una contraseña");
			String pass = sc.nextLine();
			contrasenas.add(pass);
			System.out.println("Quiere Agregar otra contraseña? (no o cualqueir letra)");
			String sn = sc.nextLine();
			if(sn.equals("no")) {
				bandera = false;
			}
			
		} while(bandera);
*/
		
		

	}

}
