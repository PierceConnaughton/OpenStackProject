import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonGpuDetailsComponent } from './amazon-gpu-details.component';

describe('AmazonGpuDetailsComponent', () => {
  let component: AmazonGpuDetailsComponent;
  let fixture: ComponentFixture<AmazonGpuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonGpuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonGpuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
