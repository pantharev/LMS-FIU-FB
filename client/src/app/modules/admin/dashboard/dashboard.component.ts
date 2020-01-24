import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Actions'];
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

  editCourse(id) {
    this.router.navigate([`admin/edit-course/${id}`]);
  }

  deleteCourse(id) {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.fetchCourses();
    });
  }

}
