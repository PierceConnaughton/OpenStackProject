import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonGpuRowComponent } from './amazon-gpu-row.component';

describe('AmazonGpuRowComponent', () => {
  let component: AmazonGpuRowComponent;
  let fixture: ComponentFixture<AmazonGpuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonGpuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonGpuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
