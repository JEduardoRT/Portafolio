import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { FinalizadoComponent } from './finalizado/finalizado.component';

const routes: Routes = [
  { path: "acerca", component: AcercaComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "home", component: HomeComponent },
  { path: "finalizado", component: FinalizadoComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
