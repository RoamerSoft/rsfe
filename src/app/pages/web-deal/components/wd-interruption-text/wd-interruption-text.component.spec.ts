import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdInterruptionTextComponent } from './wd-interruption-text.component';

describe('WdInterruptionTextComponent', () => {
  let component: WdInterruptionTextComponent;
  let fixture: ComponentFixture<WdInterruptionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdInterruptionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdInterruptionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
