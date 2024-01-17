import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Nokia {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese la cadena de números a descifrar:");
        String cadenaNumeros = scanner.nextLine();

        String mensajeDescifrado = descifrarMensaje(cadenaNumeros);
        System.out.println("Mensaje descifrado: " + mensajeDescifrado);
    }

    public static String descifrarMensaje(String cadenaNumeros) {
        Map<Character, String> tecladoNokia = new HashMap<>();
        tecladoNokia.put('1', ".,");
        tecladoNokia.put('2', "ABC");
        tecladoNokia.put('3', "DEF");
        tecladoNokia.put('4', "GHI");
        tecladoNokia.put('5', "JKL");
        tecladoNokia.put('6', "MNO");
        tecladoNokia.put('7', "PQRS");
        tecladoNokia.put('8', "TUV");
        tecladoNokia.put('9', "WXYZ");
        tecladoNokia.put('0', " ");

        StringBuilder mensajeDescifrado = new StringBuilder();
        String[] partes = cadenaNumeros.split(" ");

        for (String parte : partes) {
            char numero = parte.charAt(0);
            if (tecladoNokia.containsKey(numero)) {
                String secuenciaLetras = tecladoNokia.get(numero);
                System.out.println(secuenciaLetras);
                char letraActual = secuenciaLetras.charAt(0);
                System.out.println(letraActual);
                int cantidadRepetir = parte.length(); // Repetir según la cantidad de veces que se presionó la tecla
                
                mensajeDescifrado.append(String.valueOf(letraActual).repeat(Math.max(0, cantidadRepetir)));
            } else {
                mensajeDescifrado.append(numero);
            }
            mensajeDescifrado.append(" "); // Agregar un espacio entre palabras
        }

        return mensajeDescifrado.toString().trim(); // Eliminar el espacio adicional al final
    }
}