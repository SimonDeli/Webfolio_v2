import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMouseFollowComponent } from './circle-mouse-follow.component';

describe('CircleMouseFollowComponent', () => {
  let component: CircleMouseFollowComponent;
  let fixture: ComponentFixture<CircleMouseFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleMouseFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleMouseFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
