import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../../core/models/course.model';
import { CourseBrowserService } from '../../../../core/services/course-browser.service';

@Component({
  selector: 'app-course-browser',
  templateUrl: './course-browser.component.html',
  styleUrls: ['./course-browser.component.scss']
})
export class CourseBrowserComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date'];

  constructor(private courseService: CourseBrowserService, private router: Router) { }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses()
      .subscribe((data: Course[]) => {
        this.courses = data;
        console.log('Data requested...');
        console.log(this.courses);
      });
  }

}
