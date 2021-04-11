import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuHomeComponent } from './cpu-home.component';

describe('CpuHomeComponent', () => {
  let component: CpuHomeComponent;
  let fixture: ComponentFixture<CpuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
