import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  /* 
  inputs: ['isFavorite']
  Could use this instead of the input decorator, however if you were to rename isFavorite
  in the component and not update this, you'd have two fields and the component would break
  because isFavorite would not be updateable, but what you needed to update to 
  truly pass that state/property to the favorite component.
  */
})
export class FavoriteComponent implements OnInit {
  /* 
    marks field and properties as input properties
    'is-favorite' is an alias for the field and keeps the name
    stable if you were to rename the isFavorite variable without breaking 
    the html template
  */
  @Input('isFavorite') isSelected: boolean;
  // cmd + . to select auto import
  @Output('change') click = new EventEmitter();

  constructor(){}

  ngOnInit(){}

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}