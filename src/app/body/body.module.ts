import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInicioComponent } from './body-inicio/body-inicio.component';



@NgModule({
  declarations: [
    BodyInicioComponent
  ],
  exports:[
    BodyInicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
