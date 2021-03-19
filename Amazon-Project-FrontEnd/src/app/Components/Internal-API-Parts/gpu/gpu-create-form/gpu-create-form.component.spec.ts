import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuCreateFormComponent } from './gpu-create-form.component';

describe('GpuCreateFormComponent', () => {
  let component: GpuCreateFormComponent;
  let fixture: ComponentFixture<GpuCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
