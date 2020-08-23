import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { MainMenuComponent } from './main/navigation/main-menu/main-menu.component';
import { ArtMenuComponent } from './main/navigation/art-menu/art-menu.component';
import { LogoComponent } from './main/artworks/logo/logo.component';
import { DrawingComponent } from './main/artworks/drawing/drawing.component';
import { PosterComponent } from './main/artworks/poster/poster.component';
import { ModelisationComponent } from './main/artworks/modelisation/modelisation.component';
import { MotionDesignComponent } from './main/artworks/motion-design/motion-design.component';
import { OtherComponent } from './main/artworks/other/other.component';
import { CircleMouseFollowModule } from 'circle-mouse-follow';
// import { CircleMouseFollowModule } from './test-library/circle-mouse-follow.module';
import { ArtworksComponent } from './main/artworks/artworks.component';
import { AnimationsTestComponent } from './main/animations-test/animations-test.component';
import { GridComponent } from './utils/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    ArtMenuComponent,
    LogoComponent,
    DrawingComponent,
    PosterComponent,
    ModelisationComponent,
    MotionDesignComponent,
    OtherComponent,
    ArtworksComponent,
    AnimationsTestComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CircleMouseFollowModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
