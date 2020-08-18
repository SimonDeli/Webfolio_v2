import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleMouseFollowComponent } from './circle-mouse-follow.component';
import { MfHoverDirective } from './directives/mf-hover.directive';

@NgModule({
  declarations: [
    CircleMouseFollowComponent,
    MfHoverDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CircleMouseFollowComponent,
    MfHoverDirective
  ],
  providers: [
    CircleMouseFollowComponent
  ]
})
export class CircleMouseFollowModule { }
