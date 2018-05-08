import { Component } from '@angular/core';
import { FavoriteChangedArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    isSelected: true
  }

  tweet = {
    isLiked: false,
    likesCount: 0
  }

  courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
    {id: 4, name: "course4"}
  ]

  onAdd() {
    this.courses.push({id:4, name: "course4"})
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onFavoriteChanged(eventArgs: FavoriteChangedArgs) {
    console.log("Favorite changed", eventArgs);
  }

}