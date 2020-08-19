import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const slideAnimation =
  trigger('routeAnimations', [
    transition("Home => *", [
      style({position:"relative", overflow:"hidden"}),
      query(':enter, :leave', [
        style({
          position:"absolute",
          top:0,
          left:0,
          width:'100%',
          height:'100%'
        })
      ]),
      query(':enter', [
        style({
          top:"100%",
          zIndex:9999
        })
      ]),
      query(':leave', [
        style({
          zIndex:1
        })
      ]),
      group([
        query(':enter', [
          animate('1000ms ease-in-out', style({
            top:"0%"
          }))
        ]),
        query(':leave', [
          animate('1000ms ease-in-out', style({
            top:"100%"
          }))
        ])
      ])

    ]),
    transition("* => Home", [
      style({
        position:"relative",
        overflow:"hidden"
      }),
      query(':enter, :leave', [
        style({
          position:"absolute",
          top:0,
          left:0,
          width:'100%',
          height:'100%'
        })
      ]),
      query(':enter', [
        style({
          opacity:0,
          zIndex:9999
        })
      ]),
      query(':leave', [
        style({
          zIndex:1
        })
      ]),
      group([
        query(':enter', [
          animate('1000ms ease-in-out', style({
              opacity:1
            })
          )
        ]),
        query(':leave', [
          animate('1000ms ease-in-out', style({
              opacity:0
            })
          )
        ])
      ])

    ])
  ])
