import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<boolean> {
    return this.getUsers().pipe(
      switchMap(users => {
        if (users.find(u => u.email === user.email)) {
          return of(false); // Usuario ya existe, devolver Observable<boolean> con valor false
        } else {
          // Realizar la solicitud POST para agregar un nuevo usuario
          return this.http.post<User>(this.apiUrl, user).pipe(
            map(() => true), // Si la solicitud POST es exitosa, devolver Observable<boolean> con valor true
            catchError(() => of(false)) // Si hay un error, devolver Observable<boolean> con valor false
          );
        }
      })
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        return !!user;
      })
    );
  }

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
