import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mouse-follow',
  templateUrl: './mouse-follow.component.html',
  styleUrls: ['./mouse-follow.component.scss']
})
export class MouseFollowComponent implements OnInit {

  static comp:MouseFollowComponent;

  @Input("size") baseSizeElem:number = 50;
  @Input("delay") delay:number = 0;

  sizeElem:number = this.baseSizeElem;
  leftElem:number = 0;
  topElem:number = 0;

  isHovSmtg:boolean = false;
  outOfBounds:boolean = false;


  constructor() {
    if(!MouseFollowComponent.comp) {
      MouseFollowComponent.comp = this;
    }
    return MouseFollowComponent.comp;
  }

  public static getComp(): MouseFollowComponent{
    return MouseFollowComponent.comp;
  }

  ngOnInit(): void {
    this.sizeElem = 0;
  }

  onMouseMove(e) {
    this.followMouse(e);
  }

  private followMouse(event:any){
    const x = event.clientX;
    const y = event.clientY;
    const limitOffset = 15;
    this.outOfBounds =  !(x <= (document.body.clientWidth - this.baseSizeElem / 2) - limitOffset  &&
                          y <= (document.body.clientHeight - this.baseSizeElem / 2) - limitOffset &&
                          x > this.baseSizeElem / 2 + limitOffset &&
                          y > this.baseSizeElem / 2 + limitOffset);
    window.setTimeout(() => {
      this.sizeElem = this.baseSizeElem;
      this.leftElem = x - this.sizeElem/2;
      this.topElem = y - this.sizeElem/2;
    }, this.delay);
  }
  // Trigger by the directive "mf-hover"
  public setIsHovSmth(value:boolean){
    this.isHovSmtg = value;
  }
  public isOutOfBounds(){
    return this.outOfBounds;
  }
}
