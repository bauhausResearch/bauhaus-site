import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedWorkSectionComponent } from './planned-work-section.component';

describe('PlannedWorkSectionComponent', () => {
  let component: PlannedWorkSectionComponent;
  let fixture: ComponentFixture<PlannedWorkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlannedWorkSectionComponent]
    });
    fixture = TestBed.createComponent(PlannedWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
