import { Component } from '@angular/core';
import { Curso } from '../../../interfaces/Cursos.interface';
import { CommonModule } from '@angular/common';
import { CourseCard } from "../course-card/course-card";

@Component({
  selector: 'course-list',
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
  imports: [CommonModule, CourseCard]
})
export class CourseListComponent {

  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Programación Web',
      docente: 'Ing. Joel Barba',
      creditos: 4,
      horario: 'Lunes 08:00 - 13:00'
    },
    {
      id: 2,
      nombre: 'Base de Datos',
      docente: 'Ing. María ',
      creditos: 3,
      horario: 'Martes 10:00 - 14:00'
    },
    {
      id: 3,
      nombre: 'Inteligencia Artificial',
      docente: 'Ing. Pepe',
      creditos: 4,
      horario: 'Miércoles 08:00 - 10:00'
    },
    {
      id: 4,
      nombre: 'Programación Web Avanzada',
      docente: 'Ing. Joel Barba',
      creditos: 3,
      horario: 'Jueves 10:00 - 16:00'
    }
  ];

}
