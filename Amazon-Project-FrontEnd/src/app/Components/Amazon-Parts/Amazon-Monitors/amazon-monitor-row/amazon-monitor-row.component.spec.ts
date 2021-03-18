import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonMonitorRowComponent } from './amazon-monitor-row.component';

describe('AmazonMonitorRowComponent', () => {
  let component: AmazonMonitorRowComponent;
  let fixture: ComponentFixture<AmazonMonitorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonMonitorRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonMonitorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
