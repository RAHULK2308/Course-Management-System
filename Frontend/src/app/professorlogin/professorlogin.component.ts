import { Component, OnInit } from '@angular/core';
import { AuthprofessorService } from '../authprofessor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professorlogin',
  templateUrl: './professorlogin.component.html',
  styleUrls: ['./professorlogin.component.css']
})
export class ProfessorloginComponent implements OnInit {

  professor={
    email:'',
  password:''}
  message=""
  constructor(private auth:AuthprofessorService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this.auth.loginUser(this.professor)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
        alert("successfully completed ");
      },
      err => {
        console.log(err);
        this.message="Please enter valid email & password"
        this.router.navigate(['professor'])
      }) 
  }

}
