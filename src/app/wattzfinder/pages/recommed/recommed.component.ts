import { Component } from '@angular/core';
import {CarsService} from "../../services/cars/cars.service";

@Component({
  selector: 'app-recommed',
  templateUrl: './recommed.component.html',
  styleUrl: './recommed.component.css'
})
export class RecommedComponent {
  filtros: string[] = [];
  laptops: any[] = [];
  precioMin: string="";
  precioMax: string="";

  constructor(private laptopsService: CarsService) { }

  toggleFiltro(filtro: string) {
    const index = this.filtros.indexOf(filtro);
    if (index === -1) {
      this.filtros.push(filtro);
    } else {
      this.filtros.splice(index, 1);
    }
  }



  filtrarLaptops(laptops: any[]) {
    return laptops.filter(laptop => {
      return this.filtros.every(filtro => {
        const [filtroKey, filtroValue] = filtro.split(':');
        return laptop[filtroKey] === filtroValue;
      });
    });
  }
}
