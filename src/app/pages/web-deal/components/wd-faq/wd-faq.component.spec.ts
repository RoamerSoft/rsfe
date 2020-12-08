import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdFaqComponent } from './wd-faq.component';

describe('WdFaqComponent', () => {
  let component: WdFaqComponent;
  let fixture: ComponentFixture<WdFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
