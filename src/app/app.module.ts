import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//Creados por nosotrosXD
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTING } from "./app.routes";
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent, FooterComponent, 
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule , 
    HeaderModule ,
    FormsModule,
    BrowserAnimationsModule , MatNativeDateModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
