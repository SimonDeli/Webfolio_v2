import { Component, OnInit } from '@angular/core';
import { ArtworkGalleryData } from 'src/app/utils/interfaces/ArtworkGalleryData';
import { CategorieService } from 'src/app/utils/service/categorie.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  private base_src:string = "assets/images/dessins/";
  dessins:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    const art = this.categorieService.getArtworksByCategorie("dessin");
    for (let i = 0; i < art.length; i++) {
      const element = art[i];
      this.dessins.push({
        id:element["id"],
        src:this.base_src + element["name"]
      })
    }
  }

}
