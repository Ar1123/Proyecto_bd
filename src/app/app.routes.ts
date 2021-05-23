//import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./body/estudiante/home/home.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";
import { ActividadComponent } from './pages/actividad/actividad.component';
import { DetalleActividadComponent } from './pages/detalle-actividad/detalle-actividad.component';
import { HomeDocenteComponent } from "./body/docente/home-docente/home-docente.component";
import { DocenteGruposComponent } from "./body/docente/docente-grupos/docente-grupos.component";
import { AgregarActividadComponent } from "./body/docente/agregar-actividad/agregar-actividad.component";
import { VerEntregasComponent } from "./body/docente/ver-entregas/ver-entregas.component";


const APP_ROUTES : Routes = [
    {path: 'inicio' , component: InicioComponent},
    {path:'login',component:LoginComponent},
    //Esto se va a modificar, porque el rol hay que pasarselo por parametro // Es mejor por un service, se mantiene de manera global
    {path: 'homeEstudiante' , component:HomeComponent},
    {path:'studentActivity', component: ActividadComponent},
    {path:'activityDetail', component: DetalleActividadComponent},
    {path: 'homeDocente', component: HomeDocenteComponent}, 
    {path: 'cursosDocente/:curso', component: DocenteGruposComponent}, 
    {path: 'agregarActividadDocente/:curso/:id', component: AgregarActividadComponent},  
    {path: 'verEntregas/:curso/:id', component: VerEntregasComponent},
    {path:'**', pathMatch:'full', redirectTo:'inicio'},
    
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);