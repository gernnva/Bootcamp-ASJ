import java.util.Random;
import java.util.Scanner;

public class Ejercicio6 {

    static Scanner sc = new Scanner(System.in);
    static int bandera = 0;
    static Random rnd = new Random();

    public static void main(String[] args) {

        int[][] matriX = new int[4][4];

        switch (opciones(matriX)) {
            case 1:
                rellenarMatriz(matriX);
                bandera = 1;
                break;
            default:
                break;
        }

        if (bandera == 1) {
            opciones(matriX);
        } else {
            System.out.println("Debes rellenar la matriz antes de realizar otras operaciones.");
        }
    }

    public static Integer opciones(int[][] matriz) {

        int opcElegida;

        do {

            System.out.println("SELECCIONE LA OPERACION QUE DESEA REALIZAR");
            System.out.println("******************************************");
            System.out.println("1. RELLENAR LA MATRIZ (Ya realizada)");
            System.out.println("2. SUMA DE UNA FILA");
            System.out.println("3. SUMA DE UNA COLUMNA");
            System.out.println("4. SUMAR LA DIAGONAL PRINCIPAL");
            System.out.println("5. SUMAR LA DIAGONAL INVERSA");
            System.out.println("6. LA MEDIA DE TODOS LOS VALORES");
            opcElegida = sc.nextInt();

            switch (opcElegida) {
                case 2:
                    sumaFila(matriz);
                    break;
                case 3:
                    sumaColumna(matriz);
                    break;
                case 4:
                    sumaDiagonalPrincipal(matriz);
                    break;
                case 5:
                    sumaDiagonalInversa(matriz);
                    break;
                case 6:
                    mediaValores(matriz);
                    break;
                default:
                    break;
            }

        } while (!(opcElegida == 1));

        return opcElegida;
    }

    public static void rellenarMatriz(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                matriz[i][j] = rnd.nextInt(101);
            }
        }
        System.out.println("Matriz rellenada correctamente.");
    }

    public static void sumaFila(int[][] matriz) {
        System.out.println("Ingrese el número de fila que desea sumar (1-4): ");
        int fila = sc.nextInt();
        if (fila >= 1 && fila <= 4) {
            int suma = 0;
            for (int j = 0; j < matriz[fila - 1].length; j++) {
                suma += matriz[fila - 1][j];
            }
            System.out.println("La suma de la fila " + fila + " es: " + suma);
        } else {
            System.out.println("Número de fila incorrecto.");
        }
    }

    public static void sumaColumna(int[][] matriz) {
        System.out.println("Ingrese el número de columna que desea sumar (1-4): ");
        int columna = sc.nextInt();
        if (columna >= 1 && columna <= 4) {
            int suma = 0;
            for (int i = 0; i < matriz.length; i++) {
                suma += matriz[i][columna - 1];
            }
            System.out.println("La suma de la columna " + columna + " es: " + suma);
        } else {
            System.out.println("Número de columna incorrecto.");
        }
    }

    public static void sumaDiagonalPrincipal(int[][] matriz) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][i];
        }
        System.out.println("La suma de la diagonal principal es: " + suma);
    }

    public static void sumaDiagonalInversa(int[][] matriz) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][matriz.length - 1 - i];
        }
        System.out.println("La suma de la diagonal inversa es: " + suma);
    }

    public static void mediaValores(int[][] matriz) {
        int totalValores = matriz.length * matriz[0].length;
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                suma += matriz[i][j];
            }
        }
        double media = (double) suma / totalValores;
        System.out.println("La media de todos los valores es: " + media);
    }
}
