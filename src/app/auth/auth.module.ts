import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HeaderModule } from '../header/header.module';
import { HeadersComponent } from '../header/headers/headers.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    // HeadersComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
