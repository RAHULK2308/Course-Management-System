import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  student={
    uname:'',
    email:'',
  password:'',
  repeatpassword:""}

  
    message="";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  AddUser()
  { 
    if(this.student.password==this.student.repeatpassword){   
    this.auth.newUser(this.student);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/students']);
    }else{
      this.message="Password is incorrect"
    }
  }

}
