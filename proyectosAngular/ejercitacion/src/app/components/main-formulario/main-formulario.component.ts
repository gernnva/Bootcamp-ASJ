import { Component } from '@angular/core';

@Component({
  selector: 'app-main-formulario',
  templateUrl: './main-formulario.component.html',
  styleUrls: ['./main-formulario.component.css']
})
export class MainFormularioComponent {

  personajes: {urlImg: string; nameCharacter: string; profesion: string} [] = [] 

  urlImg: string = "";
  nameCharecter: string = "";
  profesion: string = "";

  agregarPersonaje(){
    this.personajes.push({
      urlImg: this.urlImg,
      nameCharacter: this.nameCharecter,
      profesion: this.profesion,
    })
  }

}
