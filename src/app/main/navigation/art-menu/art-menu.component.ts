import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/utils/service/categorie.service';

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

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.list_menu = this.categorieService.getListCategorie();
  }

}
