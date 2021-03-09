import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCpuListComponent } from './amazon-cpu-list.component';

describe('AmazonCpuListComponent', () => {
  let component: AmazonCpuListComponent;
  let fixture: ComponentFixture<AmazonCpuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCpuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
