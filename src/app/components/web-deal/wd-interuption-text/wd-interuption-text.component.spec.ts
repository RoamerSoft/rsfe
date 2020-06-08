import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdInteruptionTextComponent } from './wd-interuption-text.component';

describe('WdInteruptionTextComponent', () => {
  let component: WdInteruptionTextComponent;
  let fixture: ComponentFixture<WdInteruptionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdInteruptionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdInteruptionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
