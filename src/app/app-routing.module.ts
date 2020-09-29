import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ArtworksComponent } from './main/artworks/artworks.component';
import { DrawingComponent } from './main/artworks/drawing/drawing.component';
import { LogoComponent } from './main/artworks/logo/logo.component';
import { PosterComponent } from './main/artworks/poster/poster.component';
import { ModelisationComponent } from './main/artworks/modelisation/modelisation.component';
import { MotionDesignComponent } from './main/artworks/motion-design/motion-design.component';
import { OtherComponent } from './main/artworks/other/other.component';
import { AnimationsTestComponent } from './main/animations-test/animations-test.component';

const routes: Routes = [
  { path: '', component:HomeComponent,  data: { animation : "Home"} },
  {
    path: 'artworks',
    component:ArtworksComponent,
    children: [
      { path: 'dessin', component: DrawingComponent },
      { path: 'logo', component: LogoComponent },
      { path: 'poster', component: PosterComponent },
      { path: 'modelisation', component: ModelisationComponent },
      { path: 'motion-design', component: MotionDesignComponent },
      { path: 'autre', component: OtherComponent },
    ]
  },
  { path: 'anim-test', component:AnimationsTestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
