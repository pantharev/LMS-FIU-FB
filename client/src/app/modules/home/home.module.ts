import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';

import { CourseBrowserService } from '../../core/services/course-browser.service';


@NgModule({
  declarations: [HomeComponent, CourseBrowserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [CourseBrowserService]
})
export class HomeModule { }
