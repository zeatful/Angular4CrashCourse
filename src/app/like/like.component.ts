import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    // increment if not active, otherwise decrement
    this.likesCount += (this.isActive) ? -1 : 1;
    // invert active state
    this.isActive = !this.isActive;
  }

}


/* Assignment : Twitter Like Icon
  + Heart Icon
    - displays a count initially 0
    - on first click it turns pink and increments the count
    - for a subsequent click should decrement and change color
    - change mouse pointer to hand on cursor

    inactive
      color: #ccc
    active
      color: deeppink
    cursor change
      cursor: pointer
*/