import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCpuDetailsComponent } from './amazon-cpu-details.component';

describe('AmazonCpuDetailsComponent', () => {
  let component: AmazonCpuDetailsComponent;
  let fixture: ComponentFixture<AmazonCpuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCpuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCpuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
