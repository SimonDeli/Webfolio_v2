import { Directive, HostListener, ElementRef, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { CircleMouseFollowComponent } from '../circle-mouse-follow.component';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[mfHover]'
})
export class MfHoverDirective {

  @Output("onClick") onClickEmit:EventEmitter<any> = new EventEmitter();
  @Input("backOnClick") boc:boolean = true;
  islink:boolean = false;

  routerSub: Subscription = null;

  constructor(private mfc:CircleMouseFollowComponent,
              private el: ElementRef,
              private router:Router) {
    this.routerSub = this.router.events.subscribe(
      (response) => {
        if(response instanceof NavigationStart &&
          response.navigationTrigger === 'popstate'){ // trigger when we click on "Previously" or "Next" button
          CircleMouseFollowComponent.getComp().setIsHovSmth(false, true);
        }
      }
    )
  }
  ngOnDestroy(): void {
    if(this.routerSub){
      this.routerSub.unsubscribe();
    }

  }
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
