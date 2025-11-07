import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent implements OnInit {
  personajes: any[] = [];
  loading = true;

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe({
      next: (data) => {
        this.personajes = data.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar personajes', error);
        this.loading = false;
      }
    });
  }
}
