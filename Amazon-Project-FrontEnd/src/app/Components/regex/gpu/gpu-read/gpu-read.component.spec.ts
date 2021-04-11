import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuReadComponent } from './gpu-read.component';

describe('GpuReadComponent', () => {
  let component: GpuReadComponent;
  let fixture: ComponentFixture<GpuReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
