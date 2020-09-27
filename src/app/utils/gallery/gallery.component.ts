import { Component, OnInit, Input } from '@angular/core';
import { ArtworkGalleryData } from '../interfaces/ArtworkGalleryData';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input("elements") artworks:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();
  artworks_visible:Array<ArtworkGalleryData> = new Array<ArtworkGalleryData>();
  artworks_actual:ArtworkGalleryData;
  index_actual:number;
  main_image:string = null;
  isHover:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.changeArtworksVisible(0);
    this.artworks_actual = this.artworks_visible[1];
  }

  changeActualPoint(index:number):void {
    this.artworks_actual = this.artworks[index];
  }

  changeArtworksVisible(index:number):void {
    let isFirst = index - 1 < 0;
    let isEnd = index + 1 > this.artworks.length - 1;
    this.index_actual = index;
    if(isFirst){
      this.artworks_visible = new Array<ArtworkGalleryData>();
      this.artworks_visible.push(this.artworks[this.artworks.length - 1]);
      this.artworks_visible.push(this.artworks[0]);
      this.artworks_visible.push(this.artworks[1]);
      return;
    }
    if(isEnd) {
      this.artworks_visible = new Array<ArtworkGalleryData>();
      this.artworks_visible.push(this.artworks[this.artworks.length - 2]);
      this.artworks_visible.push(this.artworks[this.artworks.length - 1]);
      this.artworks_visible.push(this.artworks[0]);
      return;
    }
    this.artworks_visible = this.artworks.slice(index - 1, index + 2);
  }

  onNavClick(index:number): void {
    this.changeActualPoint(index);
    this.changeArtworksVisible(index);
  }
  onClickArrow(right):void {
    let future_index = right ? this.index_actual + 1 : this.index_actual - 1;
    future_index = future_index < 0 ? future_index = this.artworks.length - 1 : future_index;
    future_index = future_index > this.artworks.length - 1 ? 0 : future_index;

    console.log(future_index);
    this.changeActualPoint(future_index);
    this.changeArtworksVisible(future_index);
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
