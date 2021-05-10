import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent
  ],
  exports:[
    InicioComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyModule,
    FooterModule
    
  ]
})
export class PagesModule { }
