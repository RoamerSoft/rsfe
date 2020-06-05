import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDealPriceComponent } from './web-deal-price.component';

describe('WebDealPriceComponent', () => {
  let component: WebDealPriceComponent;
  let fixture: ComponentFixture<WebDealPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDealPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
