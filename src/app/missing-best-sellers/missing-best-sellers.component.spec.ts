import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingBestSellersComponent } from './missing-best-sellers.component';

describe('MissingBestSellersComponent', () => {
  let component: MissingBestSellersComponent;
  let fixture: ComponentFixture<MissingBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
