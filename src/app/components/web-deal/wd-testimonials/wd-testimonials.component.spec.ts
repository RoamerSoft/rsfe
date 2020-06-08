import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdTestimonialsComponent } from './wd-testimonials.component';

describe('WdTestimonialsComponent', () => {
  let component: WdTestimonialsComponent;
  let fixture: ComponentFixture<WdTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
