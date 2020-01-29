import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-course-browser',
  templateUrl: './course-browser.component.html',
  styleUrls: ['./course-browser.component.scss']
})
export class CourseBrowserComponent implements OnInit {

  //courses: Course[];
  courses: any = {};
  pages: any = [];
  displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Enrollment'];
  page = 0;
  currentPage;
  maxPages;
  maxPagesArray;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let page = this.route.snapshot.paramMap.get('page') || this.page;
    this.fetchCourses(page);
    //console.log("Init page: " + page);
  }

  fetchCourses(page) {
    this.courseService.getCourses(page, 2)
      .subscribe((data: {}) => {
        this.courses = data;
        this.page = page;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.maxPagesArray = new Array(this.maxPages);
        this.pages = Object.values(this.courses.pagination);
        //console.log(this.pages);
        console.log('Data requested...');
        //console.log(this.courses.res);
        this.courses.res.forEach((item, index, arr) => {
          let start_date = new Date(arr[index].start_date.toString());
          let end_date = new Date(arr[index].end_date.toString());

          arr[index].start_date = start_date.toLocaleDateString();
          arr[index].end_date = end_date.toLocaleDateString();

      });
        //console.log('Data requested...');
        //console.log(this.courses);
        this.router.navigate(['/courses', { page: page}]);
      });
  }

  fetchPageCourses(pageNo) {
    //console.log("pageNo: " + pageNo);
    if(pageNo < 0) {
      return;
    }
    this.courseService.getCourses(pageNo, 2)
      .subscribe((data: any = {}) => {
        this.courses = data;
        this.page = pageNo;
        this.currentPage = this.courses.pagination.current;
        this.maxPages = this.courses.pagination.maxPages;
        this.courses.res.forEach((item, index, arr) => {
            let start_date = new Date(arr[index].start_date.toString());
            let end_date = new Date(arr[index].end_date.toString());

            arr[index].start_date = start_date.toLocaleDateString();
            arr[index].end_date = end_date.toLocaleDateString();

        });
        console.log('Data requested...' + pageNo);
        //console.log(this.courses);
        //console.log("Current page: " + this.courses.pagination.current);
        this.router.navigate(['/courses', { page: this.courses.pagination.current}]);
      });
  }

  studentEnroll(courseId) {
    var student = localStorage.getItem('student');
    // Add student to students_courses table with pending enrollment
    console.log(`Enrollment pending for courseId: ${courseId}`);
  }

}
