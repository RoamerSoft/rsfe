import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingMethodComponent } from './working-method.component';

describe('WorkingMethodComponent', () => {
  let component: WorkingMethodComponent;
  let fixture: ComponentFixture<WorkingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
