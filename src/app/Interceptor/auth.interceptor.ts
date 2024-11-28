import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('login') || req.url.includes('Acceso')) {
      console.log('Solicitud de login detectada. No se añade token.');
      return next.handle(req);
    }

    const token = this.isBrowser() ? localStorage.getItem('authToken') : null;


    if (token) {
      console.log('Token encontrado y añadido al encabezado:', token);

      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });


      return next.handle(clonedRequest);
    } else {
      console.warn('No se encontró token. La solicitud puede fallar si el token es requerido.');
      return next.handle(req);
    }
  }


  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
