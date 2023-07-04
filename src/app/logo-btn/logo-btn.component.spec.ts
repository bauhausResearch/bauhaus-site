import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBtnComponent } from './logo-btn.component';

describe('LogoBtnComponent', () => {
  let component: LogoBtnComponent;
  let fixture: ComponentFixture<LogoBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoBtnComponent]
    });
    fixture = TestBed.createComponent(LogoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
