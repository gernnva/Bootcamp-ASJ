import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarDetallesComponent } from './components/mostrar-detalles/mostrar-detalles.component';


const routes: Routes = [
  { path: 'videos/:id', component: MostrarDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
