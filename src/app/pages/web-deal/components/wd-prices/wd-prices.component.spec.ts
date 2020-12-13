import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdPricesComponent } from './wd-prices.component';

describe('WdPricesComponent', () => {
  let component: WdPricesComponent;
  let fixture: ComponentFixture<WdPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
