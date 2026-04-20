import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseList { }
