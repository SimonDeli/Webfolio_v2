import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {

  @Input("image") image:string;
  @Output() clickLayer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClickLayer(){
    this.clickLayer.emit();
  }
  preventClick(event){
    event.stopPropagation();
  }

}
