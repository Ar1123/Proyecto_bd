import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GrupoComponent } from './teacher/grupo/grupo.component';
import { ActividadComponent } from './teacher/actividad/actividad.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeDocenteComponent } from './teacher/home-docente/home-docente.component';
import { HeaderModule } from '../header/header.module';
import { InicioComponent } from './student/inicio/inicio.component';
import { ActivityComponent } from './student/activity/activity.component';
import { ActivityDetailComponent } from './student/activity-detail/activity-detail.component';



@NgModule({
  declarations: [
    MainComponent,
    GrupoComponent,
    ActividadComponent,
    HomeDocenteComponent,
    InicioComponent,
    ActivityComponent,
    ActivityDetailComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    HeaderModule
  ]
})
export class ProtectedModule { }
