import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
// import {  AppRoutingModule } from '../app.routes';


@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports:[
    HeadersComponent
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule
  ]
})
export class HeaderModule { }
