import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverBtnComponent } from './hover-btn.component';

describe('HoverBtnComponent', () => {
  let component: HoverBtnComponent;
  let fixture: ComponentFixture<HoverBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HoverBtnComponent]
    });
    fixture = TestBed.createComponent(HoverBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
