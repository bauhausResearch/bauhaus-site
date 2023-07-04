import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkSectionComponent } from './lets-talk-section.component';

describe('LetsTalkSectionComponent', () => {
  let component: LetsTalkSectionComponent;
  let fixture: ComponentFixture<LetsTalkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LetsTalkSectionComponent]
    });
    fixture = TestBed.createComponent(LetsTalkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
