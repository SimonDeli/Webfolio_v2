import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.scss']
})
export class ArtworksComponent implements OnInit {

  constructor(private _router:Router) { }

  get r(){
    return this._router;
  }

  ngOnInit(): void {

  }

}
