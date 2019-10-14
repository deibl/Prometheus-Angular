import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAnnotationComponent } from './timer-annotation.component';

describe('TimerAnnotationComponent', () => {
  let component: TimerAnnotationComponent;
  let fixture: ComponentFixture<TimerAnnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAnnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
