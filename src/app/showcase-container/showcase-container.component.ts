import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBtnComponent } from "../hover-btn/hover-btn.component";

@Component({
  selector: 'app-showcase-container',
  standalone: true,
  template: `
    <section [style.background-image]="'url(' + image + ')'" [style.background-color]="backgroundColor" class="w-96 h-screen flex justify-left items-center pt-10 px-10">
      <div >
        <p class="text-3xl">{{text}}</p>
        <p class="text-xs">{{num}} | {{date}}</p>
        <p>{{subtext}}</p>
        <app-hover-btn [buttonText]="ctatext" [routeLink]="routeLink"></app-hover-btn>
      </div>
    </section>
  `,
  styles: [],
  imports: [CommonModule, HoverBtnComponent]
})
export class ShowcaseContainerComponent {
  @Input()
  backgroundColor?: string;
  @Input()
  routeLink?: string;
  @Input()
  buttonText: string = "Learn More";
  @Input()
  email?: string;
  @Input()
  image?: string;
  @Input()
  num: string = "01";
  @Input()
  date: string = "jan 26, 2022";
  @Input()
  text: string = "Reimagining the future of work";
  @Input()
  subtext: string = "Look at this thing we did with this thing";
  @Input()
  ctatext: string = "Learn More";
}
