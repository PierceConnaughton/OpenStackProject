import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFinderComponent } from './part-finder.component';

describe('PartFinderComponent', () => {
  let component: PartFinderComponent;
  let fixture: ComponentFixture<PartFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get item details for "B0815JGFQ8" and the product asin should be the same ', () => {
    component.getItemDetails("B0815JGFQ8");
    expect(component.amazonData.product.asin).toBe("B0815JGFQ8");
  });
});
