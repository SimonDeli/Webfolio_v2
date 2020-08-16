import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mouse-follow',
  templateUrl: './mouse-follow.component.html',
  styleUrls: ['./mouse-follow.component.scss']
})
export class MouseFollowComponent implements OnInit {

  static comp:MouseFollowComponent;

  @Input("size") baseSizeElem:number = 50;
  @Input("hover_size") hoverSizeElem:number = 20;
  @Input("delay") delay:number = 0;

  sizeElem:number = this.baseSizeElem;
  leftElem:number = 0;
  topElem:number = 0;


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

  }

  onMouseMove(e) {
    this.followMouse(e);
  }

  private followMouse(event:any){
    const x = event.clientX;
    const y = event.clientY;
    const show =  x <= document.body.clientWidth - this.baseSizeElem / 2  &&
                  y <= document.body.clientHeight - this.baseSizeElem / 2 &&
                  x > this.baseSizeElem / 2 &&
                  y > this.baseSizeElem / 2;




    window.setTimeout(() => {
      console.log(this.baseSizeElem);
      this.sizeElem = show ? this.baseSizeElem : 0;
      this.leftElem = x - this.sizeElem/2;
      this.topElem = y - this.sizeElem/2;
    }, this.delay);
  }

  public changeSize(size:number = 10){
    this.baseSizeElem = size;
  }
}
