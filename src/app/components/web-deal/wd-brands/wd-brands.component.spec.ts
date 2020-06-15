import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdBrandsComponent } from './wd-brands.component';

describe('WdBrandsComponent', () => {
  let component: WdBrandsComponent;
  let fixture: ComponentFixture<WdBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
