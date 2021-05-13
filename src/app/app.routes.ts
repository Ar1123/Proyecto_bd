//import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./body/estudiante/home/home.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";
import { ActividadComponent } from './pages/actividad/actividad.component';
import { DetalleActividadComponent } from './pages/detalle-actividad/detalle-actividad.component';


const APP_ROUTES : Routes = [
    {path: 'inicio' , component: InicioComponent},
    {path:'login',component:LoginComponent},
    //Esto se va a modificar, porque el rol hay que pasarselo por parametro // Es mejor por un service, se mantiene de manera global
    {path: 'homeEstudiante' , component:HomeComponent},
    {path:'studentActivity', component: ActividadComponent},
    {path:'activityDetail', component: DetalleActividadComponent},
    {path:'**', pathMatch:'full', redirectTo:'inicio'},
    
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);