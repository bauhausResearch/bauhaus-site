import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWorkSectionComponent } from './past-work-section.component';

describe('PastWorkSectionComponent', () => {
  let component: PastWorkSectionComponent;
  let fixture: ComponentFixture<PastWorkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PastWorkSectionComponent]
    });
    fixture = TestBed.createComponent(PastWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
