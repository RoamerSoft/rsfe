import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdProblemComponent } from './wd-problem.component';

describe('WdProblemComponent', () => {
  let component: WdProblemComponent;
  let fixture: ComponentFixture<WdProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
