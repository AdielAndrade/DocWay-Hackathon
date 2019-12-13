import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material/material.module';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { PainelComponent } from './painel/painel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

import {LoginService } from './login/login.service';
import {PainelService } from './painel/painel.service';
import {RegisterService } from './register/register.service'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PainelComponent,
    HomePageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [LoginService,RegisterService, PainelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
