import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonGpuListComponent } from './amazon-gpu-list.component';

describe('AmazonGpuListComponent', () => {
  let component: AmazonGpuListComponent;
  let fixture: ComponentFixture<AmazonGpuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonGpuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonGpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
