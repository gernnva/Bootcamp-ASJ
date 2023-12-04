do { let dato = prompt("Ingrese una palabra \n casa o perro o pelota arbol o genio");

} while (!(dato =='casa' || 'perro' || 'pelota' || 'arbol' || 'genio'))

    switch(dato){
        case 'casa':
            alert("home");
            break;
        case 'perro':
            alert("dog");
            break;
        case 'pelota':
            alert("ball");
            break;
        case 'arbol':
            alert("tree");
            break;
        case 'genio':
            alert("genius");
            break;
        default:
            alert("palabra ingresada incorrecta");
            break;
}




