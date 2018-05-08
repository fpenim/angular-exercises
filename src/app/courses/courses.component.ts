import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "List of Courses";
  courses; 

  email = "me@example.com";

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event) {
    console.log("Button was clicked", $event);
  }

  onKeyUp() {
    console.log(this.email);
  }
}
