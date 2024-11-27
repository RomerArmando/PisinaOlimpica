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
  newHora: any = { profesorId: '', cantidadHoras: '', fecha: '' };

  constructor(private horasService: HorasService) {}

  ngOnInit(): void {
    this.loadHoras();
  }

  loadHoras() {
    this.horasService.getAll().subscribe((data: any) => {
      this.horas = data;
    });
  }

  addHora() {
    this.horasService.add(this.newHora).subscribe(() => {
      this.loadHoras();
    });
  }

  deleteHora(horaId: number) {
  
  }
}