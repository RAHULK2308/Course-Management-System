import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentslogin',
  templateUrl: './studentslogin.component.html',
  styleUrls: ['./studentslogin.component.css']
})
export class StudentsloginComponent implements OnInit {

  student={
    email:'',
  password:''}
message=""
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this.auth.loginUser(this.student)
    .subscribe(
      res => {
        localStorage.setItem('token1', res.token)
        this.router.navigate(['/'])
        alert("successfully completed ");
      },
      err => {
        console.log(err);
        this.message="Please enter valid email & password"
        this.router.navigate(['students'])
      }) 
  }
}
