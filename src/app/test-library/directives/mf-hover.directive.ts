import { Directive, HostListener, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { CircleMouseFollowComponent } from '../circle-mouse-follow.component';

@Directive({
  selector: '[mfHover]'
})
export class MfHoverDirective {

  @Output("onClick") onClickEmit:EventEmitter<any> = new EventEmitter();
  @Input("backOnClick") boc:boolean = true;
  islink:boolean = false;

  constructor(private mfc:CircleMouseFollowComponent,
              private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event){
    const n = this.el.nativeElement;
    this.islink = !!n.getAttribute("routerLink") == true || !!n.getAttribute("href") == true;
    if(this.islink && this.boc)
      CircleMouseFollowComponent.getComp().setIsHovSmth(false);
  }
  @HostListener('mousemove', ['$event']) onMouseOver($event){
    CircleMouseFollowComponent.getComp().setIsHovSmth(true);
  }
  @HostListener('mouseout', ['$event']) onMouseOut($event){
    CircleMouseFollowComponent.getComp().setIsHovSmth(false);
  }

}
