import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCasesListComponent } from './amazon-cases-list.component';

describe('AmazonCasesListComponent', () => {
  let component: AmazonCasesListComponent;
  let fixture: ComponentFixture<AmazonCasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
