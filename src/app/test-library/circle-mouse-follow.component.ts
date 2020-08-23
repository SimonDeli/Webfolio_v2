import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-mouse-follow',
  templateUrl: './circle-mouse-follow.component.html',
  styleUrls: ['./circle-mouse-follow.component.scss']
})
export class CircleMouseFollowComponent implements OnInit {

  static comp:CircleMouseFollowComponent = null;

  @Input("size") baseSizeElem:number = 50;
  @Input("delay") delay:number = 0;
  @Input("limitScreen") limitScreen = 5;

  sizeElem:number = this.baseSizeElem;
  leftElem:number = 0;
  topElem:number = 0;

  isHovSmtg:boolean = false;
  outOfBounds:boolean = false;


  constructor() {
    if(!CircleMouseFollowComponent.comp) {
      CircleMouseFollowComponent.comp = this;
    }
    return CircleMouseFollowComponent.comp;
  }

  public static getComp(): CircleMouseFollowComponent{
    return CircleMouseFollowComponent.comp;
  }

  ngOnInit(): void {
    this.sizeElem = 0;
  }

  onMouseMove(e) {
    this.followMouse(e);
  }

  private followMouse(event:any){
    let x = event.clientX;
    let y = event.clientY;

    const limitXR = (document.body.clientWidth - this.baseSizeElem / 2) - this.limitScreen;
    const limitXL = this.baseSizeElem / 2 + this.limitScreen;
    const limitYB = (document.body.clientHeight - this.baseSizeElem / 2) - this.limitScreen;
    const limitYL = this.baseSizeElem / 2 + this.limitScreen;
    this.outOfBounds =  !(x <= limitXR  &&
                          y <= limitYB &&
                          x > limitXL &&
                          y > limitYL);

    x = x <= limitXL ? limitXL : x;
    x = x > limitXR ? limitXR : x;
    y = y <= limitYL ? limitYL : y;
    y = y > limitYB ? limitYB : y;
    window.setTimeout(() => {
      this.sizeElem = this.baseSizeElem;
      this.leftElem = x - this.sizeElem/2;
      this.topElem = y - this.sizeElem/2;
    }, this.delay);
  }
  // Trigger by the directive "mf-hover"
  public setIsHovSmth(value:boolean, force:boolean = false){
    if(!this.outOfBounds || force)
      this.isHovSmtg = value;
  }
  public isOutOfBounds(){
    return this.outOfBounds;
  }
}
