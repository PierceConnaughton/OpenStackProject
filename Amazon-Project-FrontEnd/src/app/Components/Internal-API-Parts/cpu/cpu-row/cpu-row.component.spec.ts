import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuRowComponent } from './cpu-row.component';

describe('CpuRowComponent', () => {
  let component: CpuRowComponent;
  let fixture: ComponentFixture<CpuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
