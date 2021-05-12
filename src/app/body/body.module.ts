import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { APP_ROUTING } from '../app.routes';
import { PagesModule } from '../pages/pages.module';
import { HomeComponent } from './estudiante/home/home.component';

@NgModule({
  declarations: [
    BodyInicioComponent,
    HomeComponent
  ],
  exports:[
    BodyInicioComponent
  ],
  imports: [
    CommonModule, APP_ROUTING
  ]
})
export class BodyModule { }
