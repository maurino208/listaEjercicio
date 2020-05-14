import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Ejercicio} from './ejercicio';
import {EJERCICIO} from './collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios():Observable<Ejercicio[]>{
    return of(EJERCICIO);
  }

  getEjercicio(id:number):Observable<Ejercicio>{
    return of(EJERCICIO.find(ejercicio=>ejercicio.id===id));
  }

}
