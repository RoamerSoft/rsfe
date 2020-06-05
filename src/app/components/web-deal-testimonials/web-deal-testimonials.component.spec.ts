import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDealTestimonialsComponent } from './web-deal-testimonials.component';

describe('WebDealTestimonialsComponent', () => {
  let component: WebDealTestimonialsComponent;
  let fixture: ComponentFixture<WebDealTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDealTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
