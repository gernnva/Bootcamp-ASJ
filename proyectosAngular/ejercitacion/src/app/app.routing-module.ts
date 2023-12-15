import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormularioComponent } from './components/main-formulario/main-formulario.component';

const routes: Routes = [
  {path:'formularioLosSimpsons', component:MainFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }