import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionQuoteComponent } from './interruption-quote.component';

describe('InterruptionQuoteComponent', () => {
  let component: InterruptionQuoteComponent;
  let fixture: ComponentFixture<InterruptionQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptionQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
