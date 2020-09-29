import { Component, OnInit, Input } from '@angular/core';
import { ArtworkGalleryData } from '../interfaces/ArtworkGalleryData';
import { animations } from './animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [animations]
})
export class GalleryComponent implements OnInit {

  @Input("elements") artworks:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();
  @Input("number_visible") number_visible:number = 3;
  container_img_width:string;

  artworks_visible:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();
  artworks_actual:ArtworkGalleryData;
  index_actual:number;
  main_image:string = null;
  isHover:boolean = false;

  arrowVisible:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.number_visible = this.number_visible > this.artworks.length ? this.artworks.length : this.number_visible;
    this.container_img_width = 100 / this.number_visible + "%";
    this.artworks_visible = this.changeArtworksVisible(0);
    this.artworks_actual = this.artworks_visible[0];
    console.log(this.number_visible);
    this.arrowVisible = this.number_visible < this.artworks.length;
  }

  changeActualPoint(index:number):void {
    this.artworks_actual = this.artworks[index];
  }

  changeArtworksVisible(index:number):Array<ArtworkGalleryData> {
    this.index_actual = index;
    let end_index = index + this.number_visible;
    if(end_index > this.artworks.length){
      let new_artworks = this.artworks.slice(index);
      console.log(this.artworks.length - index);
      for(let i = 0 ; i < end_index - this.artworks.length ; i++){
        new_artworks.push(this.artworks[i]);
      }
      return new_artworks;
    }
    return this.artworks.slice(index, end_index);
  }

  onNavClick(index:number): void {
    this.changeActualPoint(index);
    this.artworks_visible = this.changeArtworksVisible(index);
  }
  onClickArrow(right):void {
    let future_index = right ? this.index_actual + 1 : this.index_actual - 1;
    future_index = future_index < 0 ? future_index = this.artworks.length - 1 : future_index;
    future_index = future_index > this.artworks.length - 1 ? 0 : future_index;
    this.changeActualPoint(future_index);
    this.artworks_visible = this.changeArtworksVisible(future_index);
  }
  onClickElement(src): void {
    this.main_image = src;
  }
  onClickLayer(){
    this.main_image = null;
  }
  onOverElement(id:number){
    this.isHover = true;
  }
  onOutElement(){
    this.isHover = false;
  }
}
