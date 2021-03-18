import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCpuRowComponent } from './amazon-cpu-row.component';

describe('AmazonCpuRowComponent', () => {
  let component: AmazonCpuRowComponent;
  let fixture: ComponentFixture<AmazonCpuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCpuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCpuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
