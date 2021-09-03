import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course:any={
    title:"",
    description:"",
    duration:"",
    startdate:"",
    enddate:""
  }

  constructor(private service:ProfessorService,private router:Router) { }

  ngOnInit(): void {
  }

  newcourse(){
    this.service.newCourse(this.course);
    alert('success')
    this.router.navigate(['/'])
  }
}
