import { Directive, HostListener, ElementRef, Input } from '@angular/core';

/*
  Tells angular to use this directive when an element has the 
  appInputFormat attribute
*/
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  /*
  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }
  */

  // bind this method method to the blur event listener for this element
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    switch(this.format){
      case 'uppercase':
        this.el.nativeElement.value = value.toUpperCase();
        break;
      default:
        this.el.nativeElement.value = value.toLowerCase();
    }
  }
}