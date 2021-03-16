import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuDetailsComponent } from './gpu-details.component';

describe('GpuDetailsComponent', () => {
  let component: GpuDetailsComponent;
  let fixture: ComponentFixture<GpuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
