import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const routes:Routes =[
    {
    //  component: IndexComponent,
     path:'',
     children:[
         {path:'login', component:LoginComponent},
         {path:'index', component:IndexComponent},
         {path:'**', redirectTo:'index'}
     ]  

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule{}