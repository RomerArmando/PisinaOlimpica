import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../../Api-Settings/appi-settings';
import { authToken } from '../../AuthHeader/authHeader';

@Injectable({
  providedIn: 'root',
})
export class TurnosService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(ApiEndpoints.TURNOS.GET_ALL,{headers: authToken(),});
  }

  add(turno: any) {
    return this.http.post(ApiEndpoints.TURNOS.ADD,{headers: authToken(),}, turno);
  }

  delete(turnoId: number) {
    return this.http.delete(ApiEndpoints.TURNOS.DELETE(turnoId),{headers: authToken(),});
  }
}
