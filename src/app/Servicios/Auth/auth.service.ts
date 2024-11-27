import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiEndpoints } from '../../Api-Settings/appi-settings';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const body = { username, password };

    return this.http.post(ApiEndpoints.AUTH.LOGIN, body).pipe(
      tap((res: any) => {
        if (res.data && res.data.token) {
          this.saveToken(res.data.token);  // Guardamos el token usando la respuesta correcta
        }
      })
    );
  }

  saveToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem('authToken', token);  // Guardamos el token en localStorage
    } else {
      console.error('No se puede acceder a localStorage fuera del navegador.');
    }
  }

  getToken() {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken');  // Recuperamos el token desde localStorage
    }
    return null;  // Si no estamos en el navegador, devolvemos null
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');  // Eliminamos el token cuando se hace logout
    }
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    return !!this.getToken();  // Verificamos si el token está presente en localStorage
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
