import { Component, OnInit } from '@angular/core';
import { NivelesService } from '../../../Servicios/Niveles/niveles.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-niveles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './niveles.component.html',
  styleUrl: './niveles.component.css'
})
export class NivelesComponent implements OnInit {
  niveles: any[] = [];
  newNivel: any = { nombre: '' };

  constructor(private nivelesService: NivelesService) {}

  ngOnInit(): void {
    this.loadNiveles();
  }

  loadNiveles() {
    this.nivelesService.getAll().subscribe((data: any) => {
      this.niveles = data;
    });
  }

  addNivel() {
    this.nivelesService.add(this.newNivel).subscribe(() => {
      this.loadNiveles();
    });
  }

  deleteNivel(nivelId: number) {
  
  }
}