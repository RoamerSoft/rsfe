import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionTextComponent } from './interruption-text.component';

describe('InterruptionTextComponent', () => {
  let component: InterruptionTextComponent;
  let fixture: ComponentFixture<InterruptionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
