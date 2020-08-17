import { Directive, HostListener } from '@angular/core';
import { MouseFollowComponent } from '../mouse-follow.component';

@Directive({
  selector: '[mfHover]'
})
export class MfHoverDirective {

  constructor(private mfc:MouseFollowComponent) {}

  @HostListener('mouseover', ['$event']) onMouseOver($event){
    MouseFollowComponent.getComp().setIsHovSmth(true);
  }
  @HostListener('mouseout', ['$event']) onMouseOut($event){
    MouseFollowComponent.getComp().setIsHovSmth(false);
  }

}
