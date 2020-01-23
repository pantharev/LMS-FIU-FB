import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseBrowserComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
