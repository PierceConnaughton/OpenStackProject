import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuRowComponent } from './gpu-row.component';

describe('GpuRowComponent', () => {
  let component: GpuRowComponent;
  let fixture: ComponentFixture<GpuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
