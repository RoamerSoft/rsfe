import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdealIconsComponent } from './webdeal-icons.component';

describe('WebdealIconsComponent', () => {
  let component: WebdealIconsComponent;
  let fixture: ComponentFixture<WebdealIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdealIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdealIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
