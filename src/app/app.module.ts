import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



//Creados por nosotrosXD
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routes';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule , 
    HeaderModule ,
    FormsModule,
    BrowserAnimationsModule , 
    MatNativeDateModule,
    HttpClientModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
