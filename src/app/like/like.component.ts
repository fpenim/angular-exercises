import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;

  onClick() {
    if (this.isLiked) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }
    this.isLiked = !this.isLiked;
  }

}
