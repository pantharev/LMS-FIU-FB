import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-course-browser',
  templateUrl: './course-browser.component.html',
  styleUrls: ['./course-browser.component.scss']
})
export class CourseBrowserComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Enrollment'];
  page = 1;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses()
      .subscribe((data: Course[]) => {
        this.courses = data;
        this.courses.forEach((item, index, arr) => {
          let start_date = new Date(arr[index].start_date.toString());
          let end_date = new Date(arr[index].end_date.toString());

          arr[index].start_date = start_date.toLocaleDateString();
          arr[index].end_date = end_date.toLocaleDateString();

      });
        console.log('Data requested...');
        console.log(this.courses);
      });
  }

  studentEnroll(courseId) {
    var student = localStorage.getItem('student');
    // Add student to students_courses table with pending enrollment
    console.log(`Enrollment pending for courseId: ${courseId}`);
  }

}
