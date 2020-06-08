import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdIconBoxesComponent } from './wd-icon-boxes.component';

describe('WdIconBoxesComponent', () => {
  let component: WdIconBoxesComponent;
  let fixture: ComponentFixture<WdIconBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdIconBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdIconBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
