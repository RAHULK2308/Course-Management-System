import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  
  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/users/signup",{"student":item})
    .subscribe(data =>{console.log(data)})
  }

  loginUser(user:any)
  {
    return this.http.post<any>('http://localhost:3000/users/login', user)
  }
}
