import { Directive, HostListener } from '@angular/core';
import { MouseFollowComponent } from './mouse-follow.component';

@Directive({
  selector: '[mfHover]'
})
export class MfHoverDirective {

  baseMfcSize:number = MouseFollowComponent.getComp().baseSizeElem;
  hoverMfcSize:number = MouseFollowComponent.getComp().hoverSizeElem;

  constructor(private mfc:MouseFollowComponent) {}

  @HostListener('mouseover', ['$event']) onMouseOver($event){
    MouseFollowComponent.getComp().changeSize(this.hoverMfcSize);
  }
  @HostListener('mouseout', ['$event']) onMouseOut($event){
    MouseFollowComponent.getComp().changeSize(this.baseMfcSize);
  }

}
