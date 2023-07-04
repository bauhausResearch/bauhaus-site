import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBtnComponent } from "../hover-btn/hover-btn.component";

@Component({
  selector: 'app-section-box',
  standalone: true,
  template: `
<section class="{{color}}  h-[75vh]">
  <div class="hero-section__content pl-[5rem]" [ngClass]="{ sticky: isSticky }">
    <div class="h-[10vh]"></div>
    <h1 class="hero-section__title">{{title}}</h1>
    <p class="hero-section__subtitle">{{subtitle}}s</p>
    <app-hover-btn email="{{email}}" buttonText="{{buttonText}}" routeLink="{{routeLink}}"></app-hover-btn>
    <div class="h-[10vh]"></div>
  </div>
</section>
`,
  styles: [
      `
  .sticky {
    position: sticky;
    top: 40vh;
    z-index: 100;
  }
  `
  ],
  imports: [CommonModule, HoverBtnComponent]
})
export class SectionBoxComponent {
  @Input()  color: string = "bg-red-700";
  @Input()  title: string = "Default Title";
  @Input()  subtitle: string = "Default Subtitle";
  @Input()  buttonText: string  = "Default Btn Text";
  @Input() routeLink?: string;
  @Input()  email?: string;
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