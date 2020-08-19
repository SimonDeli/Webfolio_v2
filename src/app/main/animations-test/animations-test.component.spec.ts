import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsTestComponent } from './animations-test.component';

describe('AnimationsTestComponent', () => {
  let component: AnimationsTestComponent;
  let fixture: ComponentFixture<AnimationsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
