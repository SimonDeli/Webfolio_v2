import { Component, OnInit } from '@angular/core';
import { ArtworkGridData } from 'src/app/utils/interfaces/ArtworkGridData';
import { CategorieService } from 'src/app/utils/service/categorie.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  private base_src:string = "assets/images/logos/";
  logo:Array<ArtworkGridData> = new Array<ArtworkGridData>();

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    const art = this.categorieService.getArtworksByCategorie("logo");
    console.log(art);
    for (let i = 0; i < art.length; i++) {
      const element = art[i];
      this.logo.push({
        id:element["id"],
        src:this.base_src + element["name"],
        width:element["width"]
      })
    }
  }

}
