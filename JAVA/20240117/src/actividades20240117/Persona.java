package actividades20240117;

import java.util.Random;

public class Persona {
	
	Random rnd = new Random();
	
	private String nombre = "";
	private int edad = 0;
	private String dni = "";
	private char sexo = 'H';
	private double peso = 0 ;
	private double altura = 0;
	
	public Persona() {
	}

	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
	}

	public Persona(String nombre, int edad, String dni, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public double getAltura() {
		return altura;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	
	public int calcularIMC() {
		double imc =(this.peso / (this.altura * this.altura));
		if(imc<20) {
			return -1;
		} else if(imc >= 20 && imc <= 25) {
			return 0;
		} else {
			return 1;
		}
	}
	
	public boolean esMayorDeEdad() {
		return (this.edad >=18);
	}
	
	public void comprobarSexo(char sexo) {
		if (sexo == 'H' || sexo == 'M') {
			System.out.println("sexo ingresado correctamente");
		} else {
			this.sexo = 'H';
		}
	}
	

	

}
