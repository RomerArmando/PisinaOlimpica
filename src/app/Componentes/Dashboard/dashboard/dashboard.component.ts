import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../../../Api-Settings/appi-settings';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  profesores: any[] = [];
  selectedProfesorId: number | null = null;
  totalHoras: number | null = null;
  sueldo: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProfesores();
  }

  loadProfesores() {
    this.http.get<any[]>(ApiEndpoints.PROFESORES.GET_ALL).subscribe((data) => {
      this.profesores = data;
    });
  }

  calcularHorasYSalario(profesorId: number | null) {
    if (profesorId === null) {
      console.error('ID del profesor no válido');
      return;
    }
  
    this.selectedProfesorId = profesorId;
    this.http.get<any>(ApiEndpoints.HORAS.GET_BY_USER(profesorId)).subscribe((data) => {
      this.totalHoras = data.totalHoras || 0;
      this.sueldo = data.sueldo || 0;
    });
  }
}  
