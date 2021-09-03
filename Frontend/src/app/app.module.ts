import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsloginComponent } from './studentslogin/studentslogin.component';
import { ProfessorloginComponent } from './professorlogin/professorlogin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { ProfessorsignupComponent } from './professorsignup/professorsignup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsformComponent } from './studentsform/studentsform.component';
import { CourseformComponent } from './courseform/courseform.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    StudentsloginComponent,
    ProfessorloginComponent,
    StudentsignupComponent,
    ProfessorsignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StudentsformComponent,
    CourseformComponent,
    CoursedetailsComponent,
    StudentslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
