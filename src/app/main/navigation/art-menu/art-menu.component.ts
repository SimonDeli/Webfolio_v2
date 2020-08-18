import { Component, OnInit } from '@angular/core';

interface ArtworkMenu {
  photo:string,
  name:string,
  path:string
}

@Component({
  selector: 'app-art-menu',
  templateUrl: './art-menu.component.html',
  styleUrls: ['./art-menu.component.scss']
})

export class ArtMenuComponent implements OnInit {

  url_image:string = "assets/images/art-menu/";
  list_menu:ArtworkMenu[] = new Array<ArtworkMenu>();

  constructor() { }

  ngOnInit(): void {
    this.list_menu = [
      {
        photo:"dessin.png",
        name:"dessin",
        path:"dessin"
      },
      {
        photo:"logo.png",
        name:"logo",
        path:"logo"
      },
      {
        photo:"affiche.png",
        name:"affiche",
        path:"affiche"
      },
      {
        photo:"3d.png",
        name:"3d",
        path:"modelisation"
      },
      {
        photo:"motion_design.png",
        name:"motion design",
        path:"motion-design"
      },
      {
        photo:"autre.png",
        name:"autre",
        path:"autre"
      }
    ]
  }

}
