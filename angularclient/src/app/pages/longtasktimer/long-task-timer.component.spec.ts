import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTaskTimerComponent } from './long-task-timer.component';

describe('LongTaskTimerComponent', () => {
  let component: LongTaskTimerComponent;
  let fixture: ComponentFixture<LongTaskTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTaskTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTaskTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
