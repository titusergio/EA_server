import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {TeacherListComponent} from './components/teacher-list/teacher-list.component'
import {TeacherFormComponent} from './components/teacher-form/teacher-form.component'
import {TeacherPreviewComponent} from './components/teacher-preview/teacher-preview.component'
import { SubjectFormComponent } from './components/subject-form/subject-form.component';


const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherListComponent
  },
  {
    path: 'teachers/new',
    component: TeacherFormComponent
  },
  {
    path: 'teachers/:id',
    component: TeacherPreviewComponent
  },
  {
    path: 'subjects/new',
    component: SubjectFormComponent
  },
  {
    path: '',
    redirectTo: '/teachers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
