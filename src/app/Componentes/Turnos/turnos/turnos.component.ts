import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../../../Servicios/Turnos/turnos.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css'
})
export class TurnosComponent implements OnInit {
  turnos: any[] = [];
  newTurno: any = { nombre: '', horaInicio: '', horaFin: '' };

  constructor(private turnosService: TurnosService) {}

  ngOnInit(): void {
    this.loadTurnos();
  }

  loadTurnos() {
    this.turnosService.getAll().subscribe((data: any) => {
      this.turnos = data;
    });
  }

  addTurno() {
    this.turnosService.add(this.newTurno).subscribe(() => {
      this.loadTurnos();
    });
  }

  deleteTurno(turnoId: number) {
    this.turnosService.delete(turnoId).subscribe(() => {
      this.loadTurnos();
    });
  }
}
