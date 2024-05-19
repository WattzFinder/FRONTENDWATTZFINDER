import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../model/Car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'https://josehp29.pythonanywhere.com/api';
  private apiUrl2 = 'https://josehp29.pythonanywhere.com/api/Cars';
  constructor(private http: HttpClient) {}

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/Cars/${id}`);
  }

  getRecommendationsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Cars/${id}/recommendation`);
  }

  getCarsByFilter(params: any): Observable<any> {
    let parameter=[];
    if(params.brand!=""){parameter.push(`brand=${params.brand}`);}
    if(params.priceMin!=null){parameter.push(`priceMin=${params.priceMin}`);}
    if(params.priceMax!=null){parameter.push(`priceMax=${params.priceMax}`);}
    if(params.typeStorage!=""){parameter.push(`typeStorage=${params.typeStorage}`);}
    if(params.cpu!=""){parameter.push(`cpu=${params.cpu}`);}
    if(params.gpu!=""){parameter.push(`gpu=${params.gpu}`);}
    if(params.order!=""){parameter.push(`order=${params.order}`);}
    let cadena="";
    for(let i=0; i<parameter.length;i++){if (i>0){cadena+="&";}cadena+=parameter[i];}
    return this.http.get<any[]>(`${this.apiUrl}/Cars/filter?${cadena}`);
  }

  filterCars(CarId: number, params: any): Observable<any> {
    const queryParams = Object.entries(params)
      .filter(([key, value]) => value)
      .map(([key]) => `${key}=True`)
      .join('&');

    const urlWithParams = `${this.apiUrl2}/${CarId}/recommendation/filter?${queryParams}`;

    console.log(urlWithParams)
    return this.http.get(urlWithParams);
  }
}
