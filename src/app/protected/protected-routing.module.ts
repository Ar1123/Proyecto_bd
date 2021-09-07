import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ActivityDetailComponent } from './student/activity-detail/activity-detail.component';
import { ActivityComponent } from './student/activity/activity.component';
import { InicioComponent } from './student/inicio/inicio.component';
import { ActividadComponent } from './teacher/actividad/actividad.component';
import { GrupoComponent } from './teacher/grupo/grupo.component';
import { HomeDocenteComponent } from './teacher/home-docente/home-docente.component';
import { AgregarActividadComponent } from './teacher/agregar-actividad/agregar-actividad.component';
import { ListActividadesComponent } from './teacher/list-actividades/list-actividades.component';

const routes: Routes =[

/*
.......##.......##.########..##.....##.########....###.....######.....########...#######...######..########.##....##.########.########
......##.......##..##.....##.##.....##....##......##.##...##....##....##.....##.##.....##.##....##.##.......###...##....##....##......
.....##.......##...##.....##.##.....##....##.....##...##..##..........##.....##.##.....##.##.......##.......####..##....##....##......
....##.......##....########..##.....##....##....##.....##..######.....##.....##.##.....##.##.......######...##.##.##....##....######..
...##.......##.....##...##...##.....##....##....#########.......##....##.....##.##.....##.##.......##.......##..####....##....##......
..##.......##......##....##..##.....##....##....##.....##.##....##....##.....##.##.....##.##....##.##.......##...###....##....##......
.##.......##.......##.....##..#######.....##....##.....##..######.....########...#######...######..########.##....##....##....########
*/  
{ path:'',component:MainComponent,},
{ path:'home',component:HomeDocenteComponent,},
{ path:'actividad',component:ActividadComponent,},
{ path:'grupo/:id',component:GrupoComponent,},
{ path:'asignarActividad/:id_grado/:id_grupo', component:AgregarActividadComponent},
{ path:'editarActividad/:id_grado/:id_grupo/:id_actividad', component:AgregarActividadComponent},
{ path:'listActividades/:id_grado/:id_grupo', component:ListActividadesComponent},


/*
.......##.......##.########..##.....##.########....###.....######.....########..######..########.##.....##.########..####....###....##....##.########.########
......##.......##..##.....##.##.....##....##......##.##...##....##....##.......##....##....##....##.....##.##.....##..##....##.##...###...##....##....##......
.....##.......##...##.....##.##.....##....##.....##...##..##..........##.......##..........##....##.....##.##.....##..##...##...##..####..##....##....##......
....##.......##....########..##.....##....##....##.....##..######.....######....######.....##....##.....##.##.....##..##..##.....##.##.##.##....##....######..
...##.......##.....##...##...##.....##....##....#########.......##....##.............##....##....##.....##.##.....##..##..#########.##..####....##....##......
..##.......##......##....##..##.....##....##....##.....##.##....##....##.......##....##....##....##.....##.##.....##..##..##.....##.##...###....##....##......
.##.......##.......##.....##..#######.....##....##.....##..######.....########..######.....##.....#######..########..####.##.....##.##....##....##....########
*/
{ path:'inicioEstudiante/:id',component: InicioComponent, },
{ path:'actividades/:id_grupo/:id_asignatura',component: ActivityComponent,},
{ path:'detalleActividad/:id_actividad/:id_asignaturas', component: ActivityDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProtectedRoutingModule { }