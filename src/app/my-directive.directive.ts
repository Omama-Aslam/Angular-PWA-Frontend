import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  // Here's an example of a simple directive that changes the background color of an element when the user hovers over it:
  constructor(private el: ElementRef) {}

  private highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('lightgrey');
    setTimeout(() => {
      this.highlight(null);
    }, 1500);
  }
}
