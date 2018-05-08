import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  title: string = "Course Form";
  categories = [
    {id: 1, name: "Arts"},
    {id: 2, name: "Literature"},
    {id: 3, name: "Science"},
    {id: 4, name: "Politics"}
  ]

}
