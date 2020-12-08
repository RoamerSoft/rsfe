import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakerComponent } from './breaker.component';

describe('BreakerComponent', () => {
  let component: BreakerComponent;
  let fixture: ComponentFixture<BreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreakerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
