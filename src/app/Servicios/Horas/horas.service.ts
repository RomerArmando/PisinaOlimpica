import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiEndpoints } from '../../Api-Settings/appi-settings';

@Injectable({
  providedIn: 'root',
})
export class HorasService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(ApiEndpoints.HORAS.GET_ALL);
  }

  add(hora: any) {
    return this.http.post(ApiEndpoints.HORAS.ADD, hora);
  }

  delete(horaId: number) {
  }

  getByUser(userId: number) {
    return this.http.get(ApiEndpoints.HORAS.GET_BY_USER(userId));
  }
}
