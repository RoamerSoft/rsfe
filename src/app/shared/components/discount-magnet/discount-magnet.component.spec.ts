import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountMagnetComponent } from './discount-magnet.component';

describe('DiscountMagnetComponent', () => {
  let component: DiscountMagnetComponent;
  let fixture: ComponentFixture<DiscountMagnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountMagnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountMagnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
