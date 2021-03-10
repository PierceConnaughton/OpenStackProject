import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorRowComponent } from './monitor-row.component';

describe('MonitorRowComponent', () => {
  let component: MonitorRowComponent;
  let fixture: ComponentFixture<MonitorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
