import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario : Usuario = {
    codigo: 1,
    imc: 0,
    nombre: '',
    apellido: '',
    peso: 0,
    peso_max: 0,
    peso_min: 0,
    altura: 0,
    fecha_nacimiento: new Date()};
  constructor(private apiService : ApiServiceService) { 
    apiService.obtenerUsuario().subscribe(respuesta => {
      this.usuario = respuesta as Usuario
    })
  }

  ngOnInit(): void {
    console.log(this.usuario)
  }

}
