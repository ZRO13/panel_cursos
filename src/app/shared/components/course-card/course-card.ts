import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Curso } from '../../../interfaces/Cursos.interface';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCard {

  curso = input<Curso>();

}
