import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCasesDetailsComponent } from './amazon-cases-details.component';

describe('AmazonCasesDetailsComponent', () => {
  let component: AmazonCasesDetailsComponent;
  let fixture: ComponentFixture<AmazonCasesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCasesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
