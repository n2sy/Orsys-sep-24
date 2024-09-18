import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'li[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg = 'white';
  @HostBinding('style.color') cl = 'black';
  //@HostBinding('hidden') cache = false;
  // constructor(private ref: ElementRef) {
  //   console.log(ref);
  // }

  @HostListener('mouseenter') mouseenter() {
    this.bg = 'grey';
    this.cl = 'white';
    // this.cache = true;
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'pink';
    this.cl = 'black';
  }
}
