import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantileComponent } from './quantile.component';

describe('QuantileComponent', () => {
  let component: QuantileComponent;
  let fixture: ComponentFixture<QuantileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
