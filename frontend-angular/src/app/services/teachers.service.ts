import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import {Teacher} from '../interfaces/Teacher'

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  URI='http://localhost:4000/api/teachers'
  constructor(private http: HttpClient) { }
  createTeacher(teacher: Teacher){
    return this.http.post(this.URI,teacher)
  }

  getTeachers(){
    return this.http.get<Teacher[]>(this.URI);
  }

  getTeacher(id: string){
    return this.http.get<Teacher>(this.URI+'/'+ id)
  }

  deleteTeacher(id: string){
    return this.http.delete(this.URI+'/'+ id) //tb ho podria posar com a delete(`${this.URI}/${id}`)
  }

  updateTeacher(teacher: Teacher){
    return this.http.put(this.URI+'/'+teacher._id,teacher)
  }

  
}
