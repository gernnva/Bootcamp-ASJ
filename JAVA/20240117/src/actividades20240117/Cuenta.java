package actividades20240117;

public class Cuenta {
	
	private String titular;
	private double cantidad;
	
	public Cuenta() {
	}

	public Cuenta(String titular) {
		this.titular = titular;
		this.cantidad = 0;
	}

	public Cuenta(String titular, double cantidad) {
		this.titular = titular;
		this.cantidad = cantidad;
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular(String titular) {
		this.titular = titular;
	}

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}
	
	public void ingresar(double cantidad) {
		if(cantidad > 0) {
			this.cantidad = this.cantidad + cantidad; 
			System.out.println("cantidad agregada exitosamente");
		} else {
			System.out.println("Ingrese un valor valido");
		}
	}
	
	public void retirar(double cantidad) {
		if(cantidad > 0) {
			this.cantidad = this.cantidad - cantidad; 
			System.out.println("cantidad retirada exitosamente");
		} else {
			System.out.println("Ingrese un valor valido");
		}	
	}

	@Override
	public String toString() {
		return "Cuenta [titular=" + titular + ", cantidad=" + cantidad + "]";
	}
	
	
	
	
	

	
	

}
