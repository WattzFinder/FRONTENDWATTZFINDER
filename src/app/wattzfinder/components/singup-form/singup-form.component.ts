import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/User";
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrl: './singup-form.component.css'
})
export class SingupFormComponent {
  user: User = {
    fullName: '',
    email: '',
    password: '',
    code: '',
    profesion: ''
  };

  constructor(private registrationService: UsersService, private router: Router) {
  }
  // register() {
  //   this.registrationService.register(this.fullName, this.email, this.password, this.professionalTitle)
  //     .subscribe(
  //       (response) => {
  //         console.log('Registro exitoso', response);
  //       },
  //       (error) => {
  //         console.error('Error en el registro', error);
  //       }
  //     );
  // }
  register() {
    this.registrationService.register(this.user).subscribe((success: boolean) => {
      if (success) {
        console.log('Registro exitoso');
        this.router.navigate(['/login']);
      } else {
        console.error('El usuario ya existe');
      }
    });
  }
}
