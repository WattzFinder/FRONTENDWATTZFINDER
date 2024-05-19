import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Car} from "../../model/Car";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {CarsService} from "../../services/cars/cars.service";

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrl: './car-filter.component.css'
})
export class CarFilterComponent  implements OnInit {

  filterForm: FormGroup;

  cars: Car[] = [];
  paginatedcars: Car[] = [];

  brandOptions = ['', 'ACER', 'APPLE', 'DELL','ASUS', 'LG', 'MSI', 'RAZER', 'SAMSUNG', 'TOSHIBA', 'GIGABYTE', 'HP', 'ALURIN'];
  typeStorageOptions = ['', 'SSD'];
  cpuOptions = ['', 'Intel', 'AMD'];
  gpuOptions = ['', 'RTX', 'GTX', 'T', 'Radeon'];
  order = ['', 'DESC', 'ASC'];
  pageSize = 8;
  currentPage = 0;
  totalItems = 0;



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private carservice: CarsService,private router:Router) {
    this.filterForm = this.fb.group({
      brand: ["", Validators.required],
      priceMin: [null, [Validators.required, Validators.min(1)]],
      priceMax: [null, [Validators.required, Validators.min(1)]],
      typeStorage: ["", Validators.required],
      cpu: ["", Validators.required],
      gpu: ["", Validators.required],
      order: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.buscarConFiltros();
  }


  paginatecars(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedcars = this.cars.slice(startIndex, startIndex + this.pageSize);
  }

  buscarConFiltros() {
    const filters = this.filterForm.value;
    this.carservice.getCarsByFilter(filters).subscribe(
      (data) => {
        this.cars = data;
        this.totalItems = this.cars.length;
        this.paginatecars();
        this.paginator.length = this.totalItems;
        this.paginator.pageSize = this.pageSize;
        this.paginator.page.subscribe((event: PageEvent) => {
          this.currentPage = event.pageIndex;
          this.paginatecars();
        });
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
  verMas(id: number): void {
    this.router.navigate(['/cars', id]);
  }
}
