export interface ArtworkGridData {
  id:number,
  src:string,
  width?:number,
  data_grid?:{
    column_start:number,
    column_end:number,
    row_start:number,
    row_end:number
  }
}
