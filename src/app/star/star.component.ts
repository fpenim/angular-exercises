import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangedArgs {
  newValue: boolean 
}
