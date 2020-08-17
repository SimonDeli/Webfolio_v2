import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ArtworksComponent } from './main/artworks/artworks.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'artworks', component:ArtworksComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
