import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  studentdata:any=[]
  status:any="";
  accepted=true;
  warning=true;
  rejected=true;
  constructor(private service:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.service.appliedstudents().subscribe(
      data=>{
        this.studentdata=data;
      }
    )
  }

  acceptuser(user:any)
  {
    // console.log(user)
    this.service.accept(user).subscribe(
      (res)=>{
        this.status="Accepted"
        this.accepted=false;
         this.warning=true;
        this.rejected=true;
      },
      (error)=>
        {
          this.status="Over the limit"
          this.accepted=true;
          this.warning=false;
         this.rejected=true;
        }
    )
  }

  rejectuser(user:any)
  {
    // console.log(user)
    this.service.reject(user).subscribe(
      (res)=>{
        this.status="Rejected";
        this.accepted=true;
        this.warning=true;
       this.rejected=false;
      }
     
    )
  }

}
