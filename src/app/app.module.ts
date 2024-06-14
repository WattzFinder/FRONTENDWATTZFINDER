import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';

import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';

import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

// import {CarDetailsComponent} from "./wattzfinder/components/car-details/car-details.component";
import {CarFilterComponent} from "./wattzfinder/components/car-filter/car-filter.component";
import {LoginFormComponent} from "./wattzfinder/components/login-form/login-form.component";
import {SingupFormComponent} from "./wattzfinder/components/singup-form/singup-form.component";
import {ReviewsComponent} from "./wattzfinder/pages/reviews/reviews.component";
import {CarsService} from "./wattzfinder/services/cars/cars.service";
import {UsersService} from "./wattzfinder/services/users/users.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
    LoginFormComponent,
    SingupFormComponent,
    FooterComponent,
    HeaderComponent,
    ReviewsComponent,
    // CarDetailsComponent,
    CarFilterComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  providers: [CarsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
