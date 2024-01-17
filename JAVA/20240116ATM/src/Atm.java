import java.util.ArrayList;
import java.util.Scanner;

public class Atm {

	static Scanner sc = new Scanner(System.in);
	static Integer saldo = 1000;
	static ArrayList<String> movimientos = new ArrayList<>();

	public static void main(String[] args) {

		operaciones();

	}

	public static void operaciones() {

		switch (opciones()) {
		case 1:
			Integer extraccion = 0;
			System.out.println("Monto maximo de extraccion: " + saldo);

			do {
				if (extraccion > saldo) {
					System.out.println("Supera el Monto Disponible");
				} else if (extraccion < 0) {
					System.out.println("la extraccion no puede ser menor a 1");
				}
				System.out.println("Cuanto vas a retirar? ");
				extraccion = sc.nextInt();
			} while (extraccion < 0 || extraccion > saldo);

			saldo = saldo - extraccion;
			movimientos.add("Extracción: $" + extraccion);

			operaciones();

			break;
		case 2:
			Integer deposito = 0;
			System.out.println("Cuanto vas a depositar?: ");
			deposito = sc.nextInt();
			System.out.println("Ud deposito: " + deposito);
			saldo = saldo + deposito;
			movimientos.add("Deposito: $" + deposito);
			operaciones();

			break;
		case 3:
			System.out.println("Su saldo es: $" + saldo);
			movimientos.add("Consulta de Saldo, el Saldo estaba en: $" + saldo);

			operaciones();

			break;
		case 4:
			System.out.println("Movimientos de Ultimo a mas viejo");
			for (int i = 0; i < movimientos.size(); i++) {
				System.out.println((i + 1) + ") " + movimientos.get(i));
			}
			System.out.println("");
			operaciones();
			break;
		case 5:
			System.out.println("Hasta pronto");

			return;
		}
	}

	public static Integer opciones() {

		int opcElegida = 1;

		do {

			if (opcElegida < 1 || opcElegida > 5) {
				System.out.println("SELECCIONE UNA OPCION VALIDA");
				System.out.println("****************************\n");
			}

			System.out.println("SELECCIONE LA OPERACION QUE DESEA REALIZAR");
			System.out.println("******************************************");
			System.out.println("1. EXTRACCION");
			System.out.println("2. DEPOSITAR");
			System.out.println("3. CONSULTAR SALDO");
			System.out.println("4. ULTIMOS MOVIMIENTOS");
			System.out.println("5. SALIR");
			opcElegida = sc.nextInt();

		} while (opcElegida < 1 || opcElegida > 5);

		return opcElegida;

	}

}
