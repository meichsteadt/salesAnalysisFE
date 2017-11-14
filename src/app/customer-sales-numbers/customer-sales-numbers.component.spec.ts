import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesNumbersComponent } from './customer-sales-numbers.component';

describe('CustomerSalesNumbersComponent', () => {
  let component: CustomerSalesNumbersComponent;
  let fixture: ComponentFixture<CustomerSalesNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSalesNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
