import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course:any=[]
 
  constructor(private service:ProfessorService) { }

  ngOnInit(): void {
    this.service.getCourse().subscribe(data=>{
      this.course=data;
      // console.log(this.course)
    })
  }

}
