import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasePageComponent } from './showcase-page.component';

describe('ShowcasePageComponent', () => {
  let component: ShowcasePageComponent;
  let fixture: ComponentFixture<ShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShowcasePageComponent]
    });
    fixture = TestBed.createComponent(ShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
