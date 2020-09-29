import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appShadowHover]',
  host: {
    '[style.position]':'"relative"',
    '[style.border]':'"1px solid transparent"',
    '[style.filter]':'"grayscale(100%)"',
    '(mouseover)':'mouseOver()',
    '(mouseout)':'mouseOut()'
  }
})
export class ShadowHoverDirective {

  static isHover:boolean = false;
  static directiveList:Array<ShadowHoverDirective>;

  public after;


  constructor(private el: ElementRef,
              private _renderer: Renderer2) {
    if(!ShadowHoverDirective.directiveList) ShadowHoverDirective.directiveList = new Array<ShadowHoverDirective>();
    ShadowHoverDirective.directiveList.push(this);
  }
  ngOnInit() {
    this.after = this._renderer.createElement('div');
    this._renderer.setStyle(this.after, "position", "absolute");
    this._renderer.setStyle(this.after, "z-index", "1");
    this._renderer.setStyle(this.after, "top", "0");
    this._renderer.setStyle(this.after, "bottom", "0");
    this._renderer.setStyle(this.after, "left", "0");
    this._renderer.setStyle(this.after, "right", "0");
    this._renderer.setStyle(this.after, "background", "black");
    this._renderer.setStyle(this.after, "opacity", "0.5");
    this._renderer.setStyle(this.after, "transition", "all .3s");
    this._renderer.setStyle(this.after, "pointer-events", "none");

    this._renderer.appendChild(this.el.nativeElement, this.after);
  }
  ngOnDestroy() {
    ShadowHoverDirective.directiveList = new Array<ShadowHoverDirective>();
  }

  mouseOut() {
    ShadowHoverDirective.isHover = false;
    Array.from(ShadowHoverDirective.directiveList).forEach(d => {
      d._renderer.setStyle(d.after, "opacity", "0.5");
      d._renderer.setStyle(d.el.nativeElement, "border-color", "transparent");
    })
    this._renderer.setStyle(this.el.nativeElement, "filter", "grayscale(100%)");

    this._renderer.setStyle(this.after, "transition", "all .3s");
    this._renderer.setStyle(this.after, "opacity", "0.5");
  }
  mouseOver(){
    ShadowHoverDirective.isHover = true;
    Array.from(ShadowHoverDirective.directiveList).forEach(d => {
      d._renderer.setStyle(d.after, "opacity", "0.9");
      d._renderer.setStyle(d.el.nativeElement, "border-color", "rgb(180, 180, 180)");
    })
    this._renderer.setStyle(this.el.nativeElement, "filter", "none");

    this._renderer.setStyle(this.after, "transition", "all .1s");
    this._renderer.setStyle(this.after, "opacity", "0");
  }
}
