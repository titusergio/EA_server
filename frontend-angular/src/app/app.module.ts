import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { TeacherPreviewComponent } from './components/teacher-preview/teacher-preview.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { SubjectFormComponent } from './components/subject-form/subject-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeacherFormComponent,
    TeacherPreviewComponent,
    TeacherListComponent,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
