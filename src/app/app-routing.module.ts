import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ReviewsComponent} from "./wattzfinder/pages/reviews/reviews.component";
import {LoginFormComponent} from "./wattzfinder/components/login-form/login-form.component";
import {SingupFormComponent} from "./wattzfinder/components/singup-form/singup-form.component";
import {CarFilterComponent} from "./wattzfinder/components/car-filter/car-filter.component";

import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'singup', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'singup', component: SingupFormComponent},
  {path: 'cars', component: CarFilterComponent},
  // {path: 'cars/:id', component: CarDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

