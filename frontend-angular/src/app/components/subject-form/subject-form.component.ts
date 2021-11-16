import { Component, OnInit } from '@angular/core';
import { Subject } from '../../interfaces/Subject';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  constructor(private subjectsService:SubjectsService) { }

  ngOnInit(): void {
  }

  addSubject(name:HTMLInputElement,credits:HTMLInputElement):boolean
  {
    let question = {'name':name.value,'credits':+credits.value};
    this.subjectsService.createSubject(question).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    return false 
  }

}
