import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdCheckoutComponent } from './wd-checkout.component';

describe('WdCheckoutComponent', () => {
  let component: WdCheckoutComponent;
  let fixture: ComponentFixture<WdCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
