import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBtnComponent } from "../hover-btn/hover-btn.component";
import { SectionBoxComponent } from "../section-box/section-box.component";

@Component({
    selector: 'app-careers-section',
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
    ],
    imports: [CommonModule, HoverBtnComponent, SectionBoxComponent]
})
export class CareersSectionComponent {
}