import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFollowComponent } from './mouse-follow.component';

describe('MouseFollowComponent', () => {
  let component: MouseFollowComponent;
  let fixture: ComponentFixture<MouseFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
