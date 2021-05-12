import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTING } from "./app.routes";
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule , HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
