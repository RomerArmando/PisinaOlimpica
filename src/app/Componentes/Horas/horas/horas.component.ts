import { Component, OnInit } from '@angular/core';
import { HorasService } from '../../../Servicios/Horas/horas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css'
})
export class HorasComponent implements OnInit {
  horas: any[] = [];
  newHora: any = { 
    usuarioId: '',
     alumnos: '', 
     nivelId: '' 
    };

  constructor(private horasService: HorasService) {}

  ngOnInit(): void {
    this.loadHoras();
  }

  loadHoras(): void {
    this.horasService.getAll().subscribe((response: any) => {
      if (response && response.status === 'success') {
        this.horas = response.data; 
      } else {
        console.error('Error al cargar las horas:', response.message);
        this.horas = [];
      }
    });
  }

  addHora() {
    this.horasService.add(this.newHora).subscribe(() => {
      this.loadHoras();
    });
  }

  deleteHora(horaId: number) {
    this.horasService.delete(horaId).subscribe(() => {
      this.loadHoras();
    });
  }
}