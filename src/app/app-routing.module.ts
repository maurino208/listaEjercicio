import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { PanelComponent } from './panel/panel.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';


const routes: Routes = [
  {path:'ejercicios', component:EjerciciosComponent},
  {path:'panel', component:PanelComponent},
  {path:'detalle/:id', component:EjercicioDetalleComponent},
  {path:'', redirectTo:'/panel', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

