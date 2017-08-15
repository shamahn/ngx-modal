import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './_layout/nav.component';
import { HeaderComponent } from './_layout/header.component';
import { MainNavService } from './_layout/mainnav.service';
import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [MainNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
