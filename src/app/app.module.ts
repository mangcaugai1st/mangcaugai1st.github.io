import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/end_user/header/header.component';
import { FooterComponent } from './components/end_user/footer/footer.component';
import { AComponent } from './components/end_user/a/a.component';
import { HomeComponent } from './components/end_user/home/home.component';
import { ThinkPadE590Component } from './components/end_user/a/think-pad-e590/think-pad-e590.component';
import { BComponent } from './components/end_user/b/b.component';
import { FountainPenComponent } from './components/end_user/a/fountain-pen/fountain-pen.component';
import { CComponent } from './components/end_user/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AComponent,
    HomeComponent,
    ThinkPadE590Component,
    BComponent,
    FountainPenComponent,
    CComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
