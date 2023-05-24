import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { LoginComponent } from './components/login/login.component';
import { ListaGamerComponent } from './components/lista-gamer/lista-gamer.component';
import { ComprarComponent } from './components/comprar/comprar.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'lista-gamer', component:ListaGamerComponent},
  {path:'comprar/:id', component:ComprarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
