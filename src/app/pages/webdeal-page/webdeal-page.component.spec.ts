import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdealPageComponent } from './webdeal-page.component';

describe('WebdealPageComponent', () => {
  let component: WebdealPageComponent;
  let fixture: ComponentFixture<WebdealPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdealPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
