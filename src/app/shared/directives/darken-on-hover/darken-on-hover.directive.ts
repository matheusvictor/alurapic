import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkOnHoverDirective {

  @Input()
  brightness = '70%';

  constructor(private element: ElementRef, private render: Renderer) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setElementStyle(
      this.element.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setElementStyle(
      this.element.nativeElement,
      'filter',
      'brightness(100%)'
    );
  }

}
