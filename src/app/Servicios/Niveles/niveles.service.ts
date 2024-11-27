import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../../Api-Settings/appi-settings';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(ApiEndpoints.NIVELES.GET_ALL);
  }

  add(nivel: any) {
    return this.http.post(ApiEndpoints.NIVELES.ADD, nivel);
  }

  delete(nivelId: number) {
    
  }
}
