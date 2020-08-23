import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const animations =
[trigger('slide', [
  transition(':enter', [
    style({
      position:'absolute',
      transform:"translateY(-100%)"
    }),
    animate('500ms ease-out', style({
      transform:"translateY(0%)"
    }))
  ]),
  transition(':leave', [
    style({
      position:'absolute',
      transform:"translateY(0%)"
    }),
    animate('500ms ease-out', style({
      transform:"translateY(-100%)"
    }))
  ])
]),
trigger('opacity', [
  transition(':enter', [
    style({
      opacity:0
    }),
    animate('500ms ease-out', style({
      opacity:1
    }))
  ]),
  transition(':leave', [
    style({
      opacity:1
    }),
    animate('500ms ease-out', style({
      opacity:0
    }))
  ])
])
]
