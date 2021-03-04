import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonMonitorListComponent } from './amazon-monitor-list.component';

describe('AmazonMonitorListComponent', () => {
  let component: AmazonMonitorListComponent;
  let fixture: ComponentFixture<AmazonMonitorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonMonitorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonMonitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
