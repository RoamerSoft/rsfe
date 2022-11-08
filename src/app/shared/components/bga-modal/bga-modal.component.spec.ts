import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgaModalComponent } from './bga-modal.component';

describe('BgaModalComponent', () => {
  let component: BgaModalComponent;
  let fixture: ComponentFixture<BgaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
