import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthprofessorService {

  constructor(private http:HttpClient) { }

  
  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/professor/signup",{"professor":item})
    .subscribe(data =>{console.log(data)})
  }

  loginUser(user:any)
  {
    return this.http.post<any>('http://localhost:3000/professor/login', user)
  }
}
