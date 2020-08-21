import { Component, OnInit } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [animations]
})
export class MainMenuComponent implements OnInit {

  menuShow:boolean = false;
  barMenuShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() : void {
    this.menuShow = !this.menuShow;
  }
}
