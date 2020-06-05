import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDealBrandsComponent } from './web-deal-brands.component';

describe('WebDealBrandsComponent', () => {
  let component: WebDealBrandsComponent;
  let fixture: ComponentFixture<WebDealBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDealBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
