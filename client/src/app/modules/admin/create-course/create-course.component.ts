import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseForm: FormGroup;
  labels = ['name', 'description', 'seats', 'start_date', 'end_date'];

  constructor(private courseService: CourseService, private fb: FormBuilder, private router: Router) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      seats: [''],
      start_date: [''],
      end_date: ['']
    });
   }

  ngOnInit() {
  }

  addCourse(name, description, seats, start_date, end_date) {
    this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }

}
