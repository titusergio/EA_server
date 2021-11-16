import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../services/teachers.service'
import { Router } from '@angular/router';
import {Subject} from '../../interfaces/Subject'
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  subjects:any;
  selectedSubjects:any;
  selected: boolean;
  constructor(private teacherService: TeachersService, private router: Router, private subjectsServices:SubjectsService) {
    this.subjects=[];
    this.selectedSubjects=[]
    this.selected=false;
  }

  ngOnInit(): void {
    this.subjectsServices.getSubjects().subscribe(
      res=> {
        this.subjects=res
      },
      err=>console.log(err)
    )
  }

  addTeacher(name: HTMLInputElement,age:HTMLInputElement ):boolean {

    let teacher = {'_id':"",'name':name.value,'subjects':this.selectedSubjects,'age':+age.value};
    console.log("New: ");
    console.log(teacher);
    this.teacherService.createTeacher(teacher).subscribe(res=>{
      this.router.navigate(['/teachers']);},
      err=>console.log(err))

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
