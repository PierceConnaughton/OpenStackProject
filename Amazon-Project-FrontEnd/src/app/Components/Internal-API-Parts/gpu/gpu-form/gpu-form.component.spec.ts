import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuFormComponent } from './gpu-form.component';

describe('GpuFormComponent', () => {
  let component: GpuFormComponent;
  let fixture: ComponentFixture<GpuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
