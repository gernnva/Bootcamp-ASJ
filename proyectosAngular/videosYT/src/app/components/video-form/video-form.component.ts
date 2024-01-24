import { Component } from '@angular/core';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent {
  video = {
    url: '',
    categoria: '',
    titulo: '',
    descripcion: '',
    vistas: 0,
    meGusta: 0,
  };

  submitForm(): void {
    // Aquí puedes manejar la lógica del envío del formulario
    console.log('Formulario enviado:', this.video);
  }

}
