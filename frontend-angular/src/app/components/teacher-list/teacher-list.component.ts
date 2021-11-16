import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../interfaces/Teacher'
import {TeachersService} from '../../services/teachers.service'
import { SubjectsService } from 'src/app/services/subjects.service';
import {Router} from '@angular/router'
import {Subject} from '../../interfaces/Subject'




@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Array<Teacher>;
  subjects: any;
  subject: Subject;
  constructor(private teachersService:TeachersService, private router:Router, private subjectsServices:SubjectsService) { 
    this.teachers = [];
    this.subjects = [];
    this.subject=<Subject>{}
  }

  ngOnInit(): void {
    this.teachersService.getTeachers()
    .subscribe(
      res=>{ this.teachers=res
      },
      err=>console.log(err))

      this.subjectsServices.getSubjects()
    .subscribe(
      res=>{ this.subjects=res
        
      },
      err=>console.log(err))

  }

  selectedCard(id:string| undefined){
    this.router.navigate(['/teachers',id])
  }


}
