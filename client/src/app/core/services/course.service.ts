import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(`${environment.apiURL}/courses`);
  }

  getCourseById(id) {
    return this.http.get(`${environment.apiURL}/courses/${id}`);
  }

  addCourse(name, description, seats, start_date, end_date) {
    const course = {
      name: name,
      description: description,
      seats: seats,
      start_date: start_date,
      end_date: end_date
    };
    return this.http.post(`${environment.apiURL}/courses`, course);
  }

  updateCourse(id, name, description, seats, start_date, end_date) {
    const course = {
      name: name,
      description: description,
      seats: seats,
      start_date: start_date,
      end_date: end_date
    };
    return this.http.put(`${environment.apiURL}/courses/${id}`, course); //post
  }

  deleteCourse(id) {
    return this.http.delete(`${environment.apiURL}/courses/${id}`); //get
  }

}
