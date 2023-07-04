import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseContainerComponent } from "../showcase-container/showcase-container.component";
import { VertNavbarComponent } from "../vert-navbar/vert-navbar.component";

@Component({
    selector: 'app-showcase-page',
    standalone: true,
    template: `

<app-vert-navbar></app-vert-navbar>
<div class="flex overflow-x-auto px-20">
  <!-- create a div as a spacer -->
  <app-showcase-container
  [buttonText]="'ctatext'"
  [routeLink]="'routeLink'"
  [email]="'email'"
  [image]="'image'"
  [num]="'Dart Package'"
  [date]="'Jan 26, 2020'"
  [text]="'dart_statistics'"
  [subtext]="'A solution for Dart developers who want a statistics package that can be used on the web and on the server.'"
  [ctatext]="'View the Docs'"
></app-showcase-container>  
<app-showcase-container
  [buttonText]="'ctatext'"
  [routeLink]="'routeLink'"
  [email]="'email'"
  [image]="'image'"
  [num]="'Dart Package'"
  [date]="'May 2, 2023'"
  [text]="'Claymorphism'"
  [subtext]="'A solution for Dart developers who want a statistics package that can be used on the web and on the server.'"
  [ctatext]="'View the Docs'"
></app-showcase-container>  
<app-showcase-container
  [buttonText]="'ctatext'"
  [routeLink]="'routeLink'"
  [email]="'email'"
  [image]="'image'"
  [num]="'Dart Package'"
  [date]="'Jan 26, 2020'"
  [text]="'Sudoku Royale'"
  [subtext]="'A fresh take on Sudoku. A realtime blitz style Sudoku game with matchmaking.'"
  [ctatext]="'View the Docs'"
></app-showcase-container>  
<app-showcase-container
></app-showcase-container>

</div>
  `,
    styles: [],
    imports: [CommonModule, ShowcaseContainerComponent, VertNavbarComponent]
})
export class ShowcasePageComponent {

}
