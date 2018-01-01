import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewComponent } from './product-overview.component';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
