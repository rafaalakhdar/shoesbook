import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zoom]'
})

export class ZoomDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(3 );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoom(0.33);
  }

  private zoom(size: number) {
    // console.log(this.el.nativeElement.height, 'and' , this.el.nativeElement.width);
    this.el.nativeElement.height *= size;
    this.el.nativeElement.width *= size;
  }

}
