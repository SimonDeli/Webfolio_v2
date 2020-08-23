import { Injectable } from '@angular/core';
import CategorieJson from 'src/app/utils/data/artwork_data.json';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  list_categorie:Array<any>;

  constructor() {
    this.list_categorie = CategorieJson["categorie"];
  }

  getArtworksByCategorie(name:string){
    for (let i = 0; i < this.list_categorie.length; i++) {
      const element = this.list_categorie[i];
      if(element["name"] == name) return element["artworks"];
    }
  }
  getListCategorie(){
    return this.list_categorie;
  }
}
