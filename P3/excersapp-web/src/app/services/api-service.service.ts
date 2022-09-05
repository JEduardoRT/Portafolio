import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  
  obtenerEjercicios(query: string) {
    return this.http.get('http://192.168.0.13:3000/ejercicios'+query)
  }

  obtenerUsuario() {
    return this.http.get('http://192.168.0.13:3000/usuarios/1')
  }

  obtenerEjerciciosEntrenamiento(query: string) {
    return this.http.get('http://192.168.0.13:3000/ejerciciosEntrenamiento'+query)
  }

  obtenerEntrenamientos(query: string) {
    return this.http.get('http://192.168.0.13:3000/entrenamientos'+query)
  }

  obtenerCategorias() {
    return this.http.get('http://192.168.0.13:3000/entrenamientos/categorias')
  }

  obtenerInformes(query: string) {
    return this.http.get('http://192.168.0.13:3000/informes'+query)
  }
}
