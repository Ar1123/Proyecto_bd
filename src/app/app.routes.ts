//import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./body/estudiante/home/home.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";


const APP_ROUTES : Routes = [
    {path: 'inicio' , component: InicioComponent},
    {path:'login',component:LoginComponent},
    //Esto se va a modificar, porque el rol hay que pasarselo por parametro
    {path: 'homeEstudiante' , component:HomeComponent},
    {path:'**', pathMatch:'full', redirectTo:'inicio'}
    
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);