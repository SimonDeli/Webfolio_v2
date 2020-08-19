import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations-test',
  templateUrl: './animations-test.component.html',
  styleUrls: ['./animations-test.component.scss'],
  animations : [
    trigger('openClose', [
      state('open', style({
        height:'200px',
        opacity:1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      state('progress', style({
        backgroundColor:'orange',
        opacity:1
      })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)', height:'*' }),
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s',
          style({
            transform: 'translateX(-100%)'
          })
        )
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('1s')
      ])
    ])
  ]
})
export class AnimationsTestComponent implements OnInit {

  isOpen = true;
  isInProgress = false;
  isDisapear = true;

  constructor() { }

  ngOnInit(): void {
  }

  disapear(){
    this.isDisapear = !this.isDisapear;
  }
  toggleInProgress() {
    const that = this;
    this.isInProgress = true;
    setTimeout(() => {
      that.toggle();
      this.isInProgress = false;
    }, 1000);
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }

}
