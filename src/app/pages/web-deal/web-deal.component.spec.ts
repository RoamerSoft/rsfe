import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDealPageComponent } from './web-deal-page.component';

describe('WebDealPageComponent', () => {
  let component: WebDealPageComponent;
  let fixture: ComponentFixture<WebDealPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDealPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
