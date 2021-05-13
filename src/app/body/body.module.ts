import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Creados por nostros
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { APP_ROUTING } from '../app.routes';
import { PagesModule } from '../pages/pages.module';
import { HomeComponent } from './estudiante/home/home.component';
import { HeaderModule } from '../header/header.module';
import { ActivityComponent } from './estudiante/activity/activity.component';
import { ActivityDetailComponent } from './estudiante/activity-detail/activity-detail.component';
@NgModule({
  declarations: [
    BodyInicioComponent,
    HomeComponent,
    ActivityComponent,
    ActivityDetailComponent,    
  ],
  exports:[
    BodyInicioComponent,
    ActivityComponent,
    ActivityDetailComponent,    
  ],
  imports: [
    CommonModule,
     APP_ROUTING,
     HeaderModule
  ]
})
export class BodyModule { }
