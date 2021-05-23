import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Creados por nostros
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { APP_ROUTING } from '../app.routes';
import { HomeComponent } from './estudiante/home/home.component';
import { HeaderModule } from '../header/header.module';
import { ActivityComponent } from './estudiante/activity/activity.component';
import { ActivityDetailComponent } from './estudiante/activity-detail/activity-detail.component';
import { RouterModule } from '@angular/router';
import { HomeDocenteComponent } from './docente/home-docente/home-docente.component';
import { DocenteGruposComponent } from './docente/docente-grupos/docente-grupos.component';
import { AgregarActividadComponent } from './docente/agregar-actividad/agregar-actividad.component';
import { VerEntregasComponent } from './docente/ver-entregas/ver-entregas.component';
//ANGULAR MATERIAL

import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatInputModule  } from "@angular/material/input";

@NgModule({
  declarations: [
    BodyInicioComponent,
    HomeComponent,
    ActivityComponent,
    ActivityDetailComponent,HomeDocenteComponent, DocenteGruposComponent, AgregarActividadComponent, VerEntregasComponent
  ],
  exports:[
    BodyInicioComponent,
    ActivityComponent,
    ActivityDetailComponent, 
  ],
  imports: [
    CommonModule,
     APP_ROUTING,
     HeaderModule  , RouterModule, HeaderModule, MatDatepickerModule,MatInputModule
  ]
})
export class BodyModule { }
