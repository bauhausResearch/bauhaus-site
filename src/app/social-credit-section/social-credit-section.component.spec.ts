import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCreditSectionComponent } from './social-credit-section.component';

describe('SocialCreditSectionComponent', () => {
  let component: SocialCreditSectionComponent;
  let fixture: ComponentFixture<SocialCreditSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocialCreditSectionComponent]
    });
    fixture = TestBed.createComponent(SocialCreditSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
