package actividades20240117;

import java.util.Random;

public class Password {

	private int longitud = 8;
	private String contrasena;

	public Password() {

	}

	public Password(int longitud) {
		passGenerador(longitud);
	}
	
	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getContrasena() {
		return contrasena;
	}

	private void passGenerador(int longitud) {
		String caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		String pass = "";
		Random rnd = new Random();
		
		for (int i = 0; i < longitud; i++) {
            int indiceAleatorio = rnd.nextInt(caracteresPermitidos.length());
            char caracterAleatorio = caracteresPermitidos.charAt(indiceAleatorio);
            pass = pass + caracterAleatorio;
        }
		System.out.println(pass);
		this.contrasena = pass;
			
	}
	
	public boolean esFuerte(String password) {
		int mayus = 0;
        int minus = 0;
        int nums = 0;

        for (char caracter : password.toCharArray()) {
            if (Character.isUpperCase(caracter)) {
                mayus++;
            } else if (Character.isLowerCase(caracter)) {
                minus++;
            } else if (Character.isDigit(caracter)) {
                nums++;
            }
        }
		if((mayus > 2) && (minus > 1) && (nums > 5)) {
			return true;
		} else {
			return false;
		}
		
	}
	
	

}
