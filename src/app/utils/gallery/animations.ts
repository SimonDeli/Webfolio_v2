import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const animations =
[trigger('slide', [
  transition('* <=> *', [
    style({
      overflow:"hidden"
    }),
    group([
      query('*', [
        animate('1000ms ease-in-out', style({
          transform:"translateX(-200px)"
        }))
      ]),
    ])
  ]),
  transition(':leave', [
    style({
      background:"green"
    }),
    animate('500ms ease-out', style({

    }))
  ])
])
]
