import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBtnComponent } from "../hover-btn/hover-btn.component";
import { SectionBoxComponent } from "../section-box/section-box.component";

@Component({
    selector: 'app-social-credit-section',
    standalone: true,
    template: `
    <app-section-box
      [color]="'bg-blue-500'"
      [title]="'Custom Title'"
      [subtitle]="'Custom Subtitle'"
      [buttonText]="'Click Me'"
      [routeLink]="'/custom-route'"
      [email]="'custom@example.com'"
    ></app-section-box>
    `,
    styles: [
        `
      .sticky {
        position: sticky;
        top: 40vh;
        z-index: 0;
      }
      `
    ],
    imports: [CommonModule, HoverBtnComponent, SectionBoxComponent]
})
  export class SocialCreditSectionComponent {
    isSticky: boolean = true;
  
    constructor() {
      this.checkSticky();
    }
  
    checkSticky() {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isSticky = scrollTop > 75;
      });
    }
  }