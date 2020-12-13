import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WebDealComponent } from './web-deal.component';

describe('WebDealComponent', () => {
  let component: WebDealComponent;
  let fixture: ComponentFixture<WebDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WebDealComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
