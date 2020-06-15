import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdLandingSliderComponent } from './wd-landing-slider.component';

describe('WdLandingSliderComponent', () => {
  let component: WdLandingSliderComponent;
  let fixture: ComponentFixture<WdLandingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdLandingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdLandingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
