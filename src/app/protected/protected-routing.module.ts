import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ActividadComponent } from './teacher/actividad/actividad.component';
import { GrupoComponent } from './teacher/grupo/grupo.component';
import { HomeDocenteComponent } from './teacher/home-docente/home-docente.component';

const routes: Routes =[
{
    path:'',component:MainComponent,
},
{
    path:'home',component:HomeDocenteComponent,
},
{
    path:'actividad',component:ActividadComponent,
},
{
    path:'grupo',component:GrupoComponent,
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProtectedRoutingModule { }