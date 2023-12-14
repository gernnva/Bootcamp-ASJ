import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  nombreProyecto = 'Tareas a realizar!';

  tareas: { tarea: string; hecha: boolean; borrada: boolean }[] = [];

  nuevaTarea = '';

  filtroActivo: string = 'todas';

  agregarTarea() {
    if (this.nuevaTarea != '') {
      this.tareas.push({
        tarea: this.nuevaTarea,
        hecha: false,
        borrada: false,
      });
      this.nuevaTarea = '';
    }
  }

  borrarTarea(index: number) {
    console.log(this.tareas[index].borrada)
    // this.tareas.splice(index, 1);
    this.tareas[index].borrada = true;
    console.log(this.tareas[index].borrada)
  }

  actualizarHecho(index: number) {
    this.tareas[index].hecha = !this.tareas[index].hecha;
    console.log(this.tareas[index].hecha);
    console.log(this.tareas);
  }
  aplicarFiltro(filtro: string) {
    this.filtroActivo = filtro;
  }

  filtrarTareas(tarea: { tarea: string; hecha: boolean; borrada: boolean }): boolean {
    switch (this.filtroActivo) {
      case 'todas':
        return !tarea.borrada;
      case 'completadas':
        return !tarea.borrada && tarea.hecha;
      case 'noCompletadas':
        return !tarea.borrada && !tarea.hecha;
      case 'eliminadas':
        return tarea.borrada;
      default:
        return false;
    }
  }
}
