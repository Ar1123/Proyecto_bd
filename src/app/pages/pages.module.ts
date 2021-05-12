import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { FooterComponent } from '../components/footer/footer.component';
import { APP_ROUTING } from '../app.routes';

/**
 * Aca tenia error porque no se puede llamar un componente dos veces en dos modulos
 */

@NgModule({ 
  declarations: [
    InicioComponent,
    LoginComponent
  ],
  exports:[
    InicioComponent, LoginComponent
  ],
  imports: [
    CommonModule,HeaderModule,BodyModule, APP_ROUTING
    
  ]
})
export class PagesModule { }
