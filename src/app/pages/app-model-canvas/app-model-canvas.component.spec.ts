import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModelCanvasComponent } from './app-model-canvas.component';

describe('AppModelCanvasComponent', () => {
  let component: AppModelCanvasComponent;
  let fixture: ComponentFixture<AppModelCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppModelCanvasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModelCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
