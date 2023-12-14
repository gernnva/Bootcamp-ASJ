import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {

  texto = "Este es el componente ''Contenido"

  num = 0;
  aleatorio(){
    this.num = Math.floor(Math.random() * 10);
  }

  incrementar(){
    this.num = this.num + 1;

  }

  decrementar(){
    this.num = this.num - 1;
  }

}
