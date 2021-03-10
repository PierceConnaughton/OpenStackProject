import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiHomeComponent } from './rest-api-home.component';

describe('RestApiHomeComponent', () => {
  let component: RestApiHomeComponent;
  let fixture: ComponentFixture<RestApiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestApiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
