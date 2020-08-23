import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ViewChildren } from '@angular/core';
import { ImageData } from '../interfaces/ImageData';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss'],
  animations: [
    trigger("apparition", [
      transition(":enter", [
        style({
          transform:"scale(.3) translate({{left}}, {{top}})",
          opacity:0
        }),
        animate("500ms ease-in-out", style({
          transform:"scale(1) translate(0px, 0px)",
          opacity:1
        }))
      ], {params: {
        left:"0px",
        top:"0px"
      }})
    ])
  ]
})
export class SelectImageComponent implements OnInit {

  @Input("image") image:ImageData;
  @Output() clickLayer = new EventEmitter();
  @ViewChildren("elem") elem;
  private clientRect:any = null;
  transformValue:any = null;
  init:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.transformValue = {
      top:this.getBoundingClientRect(this.elem).top - this.image.top,
      left:this.getBoundingClientRect(this.elem).left - this.image.left
    }
    this.init = true;
  }
  onClickLayer(){
    this.clickLayer.emit();
  }
  preventClick(event){
    event.stopPropagation();
  }
  getBoundingClientRect(elem) {
    if(!this.clientRect){
      this.clientRect = elem.getBoundingClientRect();
    }
    return this.clientRect;
  }

}
