import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';

import { CourseService } from '../../core/services/course.service';


@NgModule({
  declarations: [HomeComponent, CourseBrowserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CourseService]
})
export class HomeModule { }
