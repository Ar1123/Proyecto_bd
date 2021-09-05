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
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'proyecto_base_de_datos_2'),
    AngularFireStorageModule,
    AppRoutingModule,
    PagesModule , 
    HeaderModule ,
    FormsModule,
    BrowserAnimationsModule , 
    MatNativeDateModule,
    HttpClientModule,
    


  ],
  providers: [AngularFireStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
