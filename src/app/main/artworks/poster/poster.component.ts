import { Component, OnInit } from '@angular/core';
import { ArtworkGalleryData } from 'src/app/utils/interfaces/ArtworkGalleryData';
import { CategorieService } from 'src/app/utils/service/categorie.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  private base_src:string = "assets/images/poster/";
  poster:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    const art = this.categorieService.getArtworksByCategorie("poster");
    for (let i = 0; i < art.length; i++) {
      const element = art[i];
      this.poster.push({
        id:element["id"],
        src:this.base_src + element["name"]
      })
    }
  }

}
