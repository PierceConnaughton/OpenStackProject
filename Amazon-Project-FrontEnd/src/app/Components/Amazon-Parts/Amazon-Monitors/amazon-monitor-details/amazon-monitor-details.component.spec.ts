import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonMonitorDetailsComponent } from './amazon-monitor-details.component';

describe('AmazonMonitorDetailsComponent', () => {
  let component: AmazonMonitorDetailsComponent;
  let fixture: ComponentFixture<AmazonMonitorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonMonitorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonMonitorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
