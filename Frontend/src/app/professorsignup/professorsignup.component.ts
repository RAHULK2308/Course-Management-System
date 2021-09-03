import { Component, OnInit } from '@angular/core';
import { AuthprofessorService } from '../authprofessor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-professorsignup',
  templateUrl: './professorsignup.component.html',
  styleUrls: ['./professorsignup.component.css']
})
export class ProfessorsignupComponent implements OnInit {

  professor={
    uname:'',
    email:'',
    password:'',
    experience:'',
    qulification:'',
  repeatpassword:""
}

  message="";

  constructor(private auth:AuthprofessorService, private router:Router) { }

  ngOnInit(): void {
  }

  AddUser()
  { 
    if(this.professor.password==this.professor.repeatpassword){   
    this.auth.newUser(this.professor);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/professor']);
    }else{
      this.message="Password is incorrect"
    }
  }
}
