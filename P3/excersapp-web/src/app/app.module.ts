import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AcercaComponent } from './acerca/acerca.component';
import {MatDividerModule} from '@angular/material/divider';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { FinalizadoComponent } from './finalizado/finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaComponent,
    PerfilComponent,
    HomeComponent,
    FinalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatToolbarModule,
    BrowserAnimationsModule,
	MatIconModule,  
	MatButtonModule,
	HttpClientModule,
	MatMenuModule,
	MatCardModule,
	MatSidenavModule,
	MatListModule,
  MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
