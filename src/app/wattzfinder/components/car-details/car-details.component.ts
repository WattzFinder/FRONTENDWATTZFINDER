// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
// import {ActivatedRoute} from "@angular/router";
// import {Car} from "../../model/Car";
// import {CarsService} from "../../services/cars/cars.service";
//
// @Component({
//   selector: 'app-car-details',
//   templateUrl: './car-details.component.html',
//   styleUrl: './car-details.component.css'
// })
// export class CarDetailsComponent  implements OnInit  {
//   Car: Car | undefined;
//   recommendations: any[] = [];
//
//   brand = ['True', 'False'];
//   status = ['True', 'False'];
//   price = ['True', 'False'];
//   typeStorage = ['True', 'False'];
//   cpu = ['True', 'False'];
//   gpu = ['True', 'False'];
//   storage = ['True', 'False'];
//
//   myForm = new FormGroup({
//     brand: new FormControl(''),
//     status: new FormControl(''),
//     price: new FormControl(''),
//     typeStorage: new FormControl(''),
//     cpu: new FormControl(''),
//     gpu: new FormControl(''),
//     storage: new FormControl(''),
//   });
//   constructor(
//     private route: ActivatedRoute,
//     private CarService: CarsService,
//     private formBuilder: FormBuilder
//   ) {
//
//   }
//
//   ngOnInit(): void {
//     this.getCarDetails();
//     this.getRecommendations();
//     // @ts-ignore
//     const CarId = +this.route.snapshot.paramMap.get('id');
//   }
//
//   getCarDetails(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.CarService.getCarById(id).subscribe((data) => {
//       this.Car = data;
//     });
//   }
//
//   getRecommendations(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.CarService.getRecommendationsById(id).subscribe((data) => {
//       this.recommendations = data;
//     });
//   }
//
//   filterCars() {
//     // @ts-ignore
//     const CarId = +this.route.snapshot.paramMap.get('id');
//     console.log(this.myForm.value);
//     this.CarService
//       .filterCars(CarId, this.myForm.value)
//       .subscribe((data) => {
//         this.recommendations = data;
//       });
//   }
//
// }
