import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { ListarVideosComponent } from './components/listar-videos/listar-videos.component';
import { MostrarDetallesComponent } from './components/mostrar-detalles/mostrar-detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoFormComponent,
    ListarVideosComponent,
    MostrarDetallesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
