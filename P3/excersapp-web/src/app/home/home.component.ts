import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Entrenamiento } from '../interfaces/entrenamiento';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCategory: any;
  categorias: any[] = []
  entrenamientos : Entrenamiento[] = [];
  constructor(private apiService : ApiServiceService, private route: ActivatedRoute, private router: Router) { 
    apiService.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta as any[]
    }) 
  }

  ngOnInit(): void {
    this.traerEntrenamientos()

  }

  select(cat: any): void {
    this.selectedCategory=cat;
    this.traerEntrenamientos();
  }

  traerEntrenamientos(): void {
    let query: any = '';
    if(this.selectedCategory){
      query = '?categoria='+this.selectedCategory
    }
    this.apiService.obtenerEntrenamientos(query).subscribe(respuesta => {
      this.entrenamientos = respuesta as Entrenamiento[]
    })
  }

  finalizar(): void {
    this.router.navigate(['finalizado'], { relativeTo: this.route});
  }
}
