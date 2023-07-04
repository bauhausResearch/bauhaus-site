import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogoBtnComponent } from "./logo-btn/logo-btn.component";
import { NavBtnComponent } from "./nav-btn/nav-btn.component";
import { NewsletterBannerComponent } from "./newsletter-banner/newsletter-banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <router-outlet></router-outlet>
    <app-logo-btn></app-logo-btn>
    <app-nav-btn></app-nav-btn>
  `,
    styles: [],
    imports: [
      CommonModule,
      RouterOutlet, 
      LogoBtnComponent, 
      NavBtnComponent, 
      NewsletterBannerComponent,
    ],
})
export class AppComponent {
  title = 'bauhaus-site';
}
