import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCasesRowComponent } from './amazon-cases-row.component';

describe('AmazonCasesRowComponent', () => {
  let component: AmazonCasesRowComponent;
  let fixture: ComponentFixture<AmazonCasesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCasesRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCasesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
