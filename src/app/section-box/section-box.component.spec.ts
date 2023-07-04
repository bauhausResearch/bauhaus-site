import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoxComponent } from './section-box.component';

describe('SectionBoxComponent', () => {
  let component: SectionBoxComponent;
  let fixture: ComponentFixture<SectionBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionBoxComponent]
    });
    fixture = TestBed.createComponent(SectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
