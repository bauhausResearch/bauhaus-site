import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBtnComponent } from "../hover-btn/hover-btn.component";

@Component({
    selector: 'app-hero-section',
    standalone: true,
    template: `
  <section class="bg-slate-600 h-[75vh]">
        <div class="hero-section__content absolute top-[50vh] left-20">
            <h1 class="hero-section__title">Bauhaus</h1>
            <p class="hero-section__subtitle">We build beautiful websites</p>
            <app-hover-btn routeLink="/showcase" buttonText="Go to Showcase"></app-hover-btn>

        </div>
    </section>
  `,
    styles: [],
    imports: [CommonModule, HoverBtnComponent]
})
export class HeroSectionComponent {

}
