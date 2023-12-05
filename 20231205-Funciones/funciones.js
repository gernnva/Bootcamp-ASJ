

const quiereONoLaCarta = () => {
    do {
        deseaOrdenar =  prompt('PRESIONE LA OPCION CORRECTA \n\n Quiere que le pase la Carta para que pueda pedir algo? \n Si \nNo)')
        deseaOrdenar.toLowerCase;
    } while (deseaOrdenar != "si")
}

const carta = () => {
    do {
        /*Aca tenia esta linea asi: opcionSeleccionada = Number(prompt(cartaString)) ; 
        Entonces el string pedido empezaba con undefined siempre.*/
        opcionSeleccionada = parseInt(prompt(cartaString)) ;
        switch(opcionSeleccionada){
            case 1:
                pedido = pedido + "pan $100\n";
                totalPedido = (totalPedido + 100);
                break;
            case 2:
                pedido = pedido + "flan $200\n";
                totalPedido += 200;
                break;
            case 3:
                pedido = pedido + "sopa $300 \n";
                totalPedido = totalPedido + 300;
                break;
            case 4:
                pedido = pedido + "carne $400\n";
                totalPedido = totalPedido + 400;
                break;
        }
    
        siOINo = prompt("quiere agregar otro producto \n si?\nno? ")
        siOINo.toLowerCase;
    
    } while(siOINo != "no");
}

const propina = (siOINo) => {
    if(siOINo == "si"){
        alert(`lo que ud pidio es: ${pedido}`)
        alert(`la cuenta CON la propina es $${(totalPedido*1.10).toFixed(2)}`)
    
    } else {
        alert(`lo que ud pidio es: ${pedido}`)
        alert(`la cuenta SIN la propina es $${totalPedido}`)
    
    }
}