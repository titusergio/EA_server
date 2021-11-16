import { Injectable } from '@angular/core';
import {Subject} from '../interfaces/Subject';
import { HttpClient } from '@angular/common/http';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  URI="http://localhost:4000/api/subjects";
  constructor(private http:HttpClient) { }

  createSubject(subject:Subject){
    return this.http.post(this.URI,subject)
  }

  getSubjects(){
    return this.http.get(this.URI)
  }

  getSubject(id: string){
    return this.http.get<Subject>(this.URI+'/'+ id)
  }
}
