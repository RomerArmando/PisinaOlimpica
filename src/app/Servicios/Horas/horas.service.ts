import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiEndpoints } from '../../Api-Settings/appi-settings';
import { authToken } from '../../AuthHeader/authHeader';

@Injectable({
  providedIn: 'root',
})
export class HorasService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(ApiEndpoints.HORAS.GET_ALL,{
      headers: authToken(),
    });
  }

  add(hora: any) {
    return this.http.post(ApiEndpoints.HORAS.ADD, hora,{headers: authToken(),});
  }

  delete(horaId: number) {
    return this.http.delete(ApiEndpoints.HORAS.DELETE(horaId),{headers: authToken(),})
  }

  getByUser(userId: number) {
    return this.http.get(ApiEndpoints.HORAS.GET_BY_USER(userId),{headers: authToken(),});
  }
}
