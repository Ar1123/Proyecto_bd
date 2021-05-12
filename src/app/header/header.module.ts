import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { APP_ROUTING } from '../app.routes';


@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports:[
    HeadersComponent
  ],
  imports: [
    CommonModule, APP_ROUTING
  ]
})
export class HeaderModule { }
