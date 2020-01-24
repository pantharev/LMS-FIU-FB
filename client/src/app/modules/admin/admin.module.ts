import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreateCourseComponent } from './create-course/create-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [CreateCourseComponent, DashboardComponent, EditCourseComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AdminModule { }
