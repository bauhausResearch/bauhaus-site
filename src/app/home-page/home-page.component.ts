import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SocialCreditSectionComponent } from "../social-credit-section/social-credit-section.component";
import { PastWorkSectionComponent } from "../past-work-section/past-work-section.component";
import { PlannedWorkSectionComponent } from "../planned-work-section/planned-work-section.component";
import { LetsTalkSectionComponent } from "../lets-talk-section/lets-talk-section.component";
import { CareersSectionComponent } from "../careers-section/careers-section.component";
import { FooterSectionComponent } from "../footer-section/footer-section.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    template: `
  <app-hero-section></app-hero-section>
  <app-social-credit-section></app-social-credit-section>
  <app-past-work-section></app-past-work-section>
  <app-lets-talk-section></app-lets-talk-section>
  <app-planned-work-section></app-planned-work-section>
  <app-careers-section></app-careers-section>
  <app-footer-section></app-footer-section>
  `,
    styles: [],
    imports: [CommonModule, HeroSectionComponent, SocialCreditSectionComponent, PastWorkSectionComponent, PlannedWorkSectionComponent, LetsTalkSectionComponent, CareersSectionComponent, FooterSectionComponent]
})
export class HomePageComponent {

}
