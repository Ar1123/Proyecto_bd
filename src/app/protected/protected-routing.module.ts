import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ActivityDetailComponent } from './student/activity-detail/activity-detail.component';
import { ActivityComponent } from './student/activity/activity.component';
import { InicioComponent } from './student/inicio/inicio.component';
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
{
    path:'inicioEstudiante/:id',component: InicioComponent,
},
{
    path:'actividades/:id_grupo',component: ActivityComponent,
},
{
    path:'detalleActividad/:id_actividad/:nombre', component: ActivityDetailComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProtectedRoutingModule { }