import { Component, OnInit } from '@angular/core';
import { ArtworkGridData } from 'src/app/utils/interfaces/ArtworkGridData';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  private base_src:string = "assets/images/logos/";
  logo:Array<ArtworkGridData> = [
      {
        id:1,
        src: this.base_src+"mmi.jpg",
        width: 7
      }
      ,
      {
        id:2,
        src: this.base_src+"ampoule.jpg",
        width: 1
      }
      ,
      {
        id:3,
        src: this.base_src+"avosbars.png",
        width: 4
      },
      {
        id:4,
        src: this.base_src+"avosbars2.png",
        width: 4
      },
      {
        id:5,
        src: this.base_src+"boisson.jpg",
        width: 2
      },
      {
        id:6,
        src: this.base_src+"boulange.jpg",
        width: 1
      },
      {
        id:7,
        src: this.base_src+"coeur_artichaut.jpg",
        width: 5
      },
      {
        id:8,
        src: this.base_src+"compagnon.jpg",
        width: 2
      },
      {
        id:9,
        src: this.base_src+"livre.jpg",
        width: 1
      },
      {
        id:10,
        src: this.base_src+"saltircus.png",
        width: 6
      },
      {
        id:11,
        src: this.base_src+"sel.jpg",
        width: 2
      },
      {
        id:12,
        src: this.base_src+"sucre.jpg",
        width: 1
      }
  ];
  grid:Array<number> = new Array<number>();

  constructor() { }

  ngOnInit(): void {

  }

}
