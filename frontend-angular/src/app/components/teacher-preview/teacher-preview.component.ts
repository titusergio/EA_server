import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { TeachersService } from 'src/app/services/teachers.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Teacher } from 'src/app/interfaces/Teacher';
import { Subject } from '../../interfaces/Subject';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-teacher-preview',
  templateUrl: './teacher-preview.component.html',
  styleUrls: ['./teacher-preview.component.css']
})
export class TeacherPreviewComponent implements OnInit {

  id: string;
  teacher: Teacher;
  //subjects: Array<Subject>;
  subjects: any;
  selectedSubjects:any;

  constructor(private router:Router, private activeRoute:ActivatedRoute, private teachersServices:TeachersService, private subjectsServices:SubjectsService) { 
    this.id="";
    this.teacher=<Teacher>{};
    this.subjects=[];
    this.selectedSubjects=[];
  }

  ngOnInit(): void{
    this.activeRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.teachersServices.getTeacher(this.id).subscribe(
        res=>{
          this.teacher=res;
        },
        err=>console.log(err)
      )
    })
    this.subjectsServices.getSubjects().subscribe(
      res=> {
        this.subjects=res
      },
      err=>console.log(err)
    )
  }

  deleteTeacher(){
    this.teachersServices.deleteTeacher(this.id)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teachers'])
      },
      err=>console.log(err) 
    )
  }

  updateTeacher(name:HTMLInputElement,age:HTMLInputElement):boolean{
    let teacher ={'_id':this.id, 'name':name.value, 'subjects':this.selectedSubjects,'age':+age.value}
    console.log("Updated: ");
    console.log(teacher);
    this.teachersServices.updateTeacher(teacher).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teachers'])
      },
      err=>console.log(err)
    )
    return false
  }

  onchange(id:string){
    this.subjectsServices.getSubject(id).subscribe(
      res=> {
        this.selectedSubjects.push(res._id)
      },
      err=>console.log(err)
    )

  }



}





