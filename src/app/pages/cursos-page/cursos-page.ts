import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseListComponent } from "../../shared/components/course-list/course-list";

@Component({
  selector: 'cursos-page',
  imports: [CourseListComponent],
  templateUrl: './cursos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursosPage { }
