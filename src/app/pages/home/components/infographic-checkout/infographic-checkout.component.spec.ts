import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicCheckoutComponent } from './infographic-checkout.component';

describe('InfographicCheckoutComponent', () => {
  let component: InfographicCheckoutComponent;
  let fixture: ComponentFixture<InfographicCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfographicCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
