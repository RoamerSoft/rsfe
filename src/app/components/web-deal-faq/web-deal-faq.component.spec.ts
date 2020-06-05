import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDealFaqComponent } from './web-deal-faq.component';

describe('WebDealFaqComponent', () => {
  let component: WebDealFaqComponent;
  let fixture: ComponentFixture<WebDealFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDealFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
