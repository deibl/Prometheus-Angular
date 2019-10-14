import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionSummaryComponent } from './distribution-summary.component';

describe('DistributionSummaryComponent', () => {
  let component: DistributionSummaryComponent;
  let fixture: ComponentFixture<DistributionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
