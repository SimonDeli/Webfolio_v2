import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseFollowComponent } from './mouse-follow.component';
import { MfHoverDirective } from './directives/mf-hover.directive';

@NgModule({
  declarations: [
    MouseFollowComponent,
    MfHoverDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MouseFollowComponent,
    MfHoverDirective
  ],
  providers: [
    MouseFollowComponent
  ]
})
export class MouseFollowModule { }
