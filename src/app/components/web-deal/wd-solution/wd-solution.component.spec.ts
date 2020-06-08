import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdSolutionComponent } from './wd-solution.component';

describe('WdSolutionComponent', () => {
  let component: WdSolutionComponent;
  let fixture: ComponentFixture<WdSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
