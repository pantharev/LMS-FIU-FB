import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CourseRoutingModule } from './course-routing.module';
 
@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
