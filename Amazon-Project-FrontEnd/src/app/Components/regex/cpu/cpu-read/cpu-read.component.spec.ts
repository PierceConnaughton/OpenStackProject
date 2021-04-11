import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuReadComponent } from './cpu-read.component';

describe('CpuReadComponent', () => {
  let component: CpuReadComponent;
  let fixture: ComponentFixture<CpuReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
