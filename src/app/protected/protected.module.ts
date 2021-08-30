import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GrupoComponent } from './teacher/grupo/grupo.component';
import { ActividadComponent } from './teacher/actividad/actividad.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeDocenteComponent } from './teacher/home-docente/home-docente.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    MainComponent,
    GrupoComponent,
    ActividadComponent,
    HomeDocenteComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    HeaderModule
  ]
})
export class ProtectedModule { }
