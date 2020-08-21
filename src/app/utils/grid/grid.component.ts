import { Component, OnInit, Input } from '@angular/core';
import { ArtworkGridData } from '../interfaces/ArtworkGridData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input("gridHeight") gridHeight:number = 100;
  @Input("gridWidth") gridWidth:number = 10;
  @Input("elements") artworks:Array<ArtworkGridData> = new Array<ArtworkGridData>();

  private grid:Array<Array<number>> = new Array<Array<number>>(this.gridHeight);


  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(this.gridWidth);
    }

    this.artworks.shuffle(); // shuffle the image array

    this.artworks.forEach((image, i) => {
      let width = image.width;
      let height = this.getRandomIntInclusive(width - 1, width - 0); // get a random height for the image compare to his width
      height = height <= 0 ? 1 : height;
      for (let r = 0, canBreak = false; r < this.grid.length && !canBreak; r++) {
        for (let c = 0; c < this.grid[r].length && !canBreak; c++) {

          let startRow = r;
          let endRow = r + height;
          let startColumn = c;
          let endColumn = c + width;

          if(
            c + width > 10 ||
            !this.checkGridEmpty(startRow, endRow, startColumn, endColumn) // check if there is the place to put the image
          ) continue; // if the image can't be put on the current place, we looking for another place

          image.data_grid = {
            column_start : startColumn + 1,
            column_end : endColumn + 1,
            row_start : startRow + 1,
            row_end : endRow + 1
          }

          this.fillGrid(startRow, endRow, startColumn, endColumn);   // fill the virtual grid with the current image,
          canBreak = true;
        }
      }
    });
  }

  checkGridEmpty(startRow:number, endRow:number, startColumn:number, endColumn:number) : boolean {
    for (let r = startRow; r < endRow; r++) {
      for (let c = startColumn; c < endColumn; c++) {
        if(this.grid[r][c] != undefined) return false;
      }
    }
    return true;
  }
  fillGrid(startRow:number, endRow:number, startColumn:number, endColumn:number){
    for (let r = startRow; r < endRow; r++) {
      for (let c = startColumn; c < endColumn; c++) {
        this.grid[r][c] = 1;
      }
    }
  }
  getRandomIntInclusive(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
