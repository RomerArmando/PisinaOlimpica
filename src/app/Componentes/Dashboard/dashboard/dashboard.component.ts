import { Component, OnInit } from '@angular/core';
import { HorasService } from '../../../Servicios/Horas/horas.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  horasTrabajadas: any[] = [];
  totalHoras = 0;
  sueldo = 0;

  constructor(private horasService: HorasService) {}

  ngOnInit(): void {
    this.loadHoras();
  }

  loadHoras() {
    this.horasService.getAll().subscribe((data: any) => {
      this.horasTrabajadas = data;
      this.calculateSueldo();
    });
  }

  calculateSueldo() {
    this.totalHoras = this.horasTrabajadas.reduce((sum, hora) => sum + hora.cantidadHoras, 0);
    this.sueldo = this.totalHoras * 53;  // Sueldo básico por hora, puedes modificar esto
  }
}
