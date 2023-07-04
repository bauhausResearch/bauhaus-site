import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsletterBannerComponent } from "../newsletter-banner/newsletter-banner.component";

@Component({
    selector: 'app-footer-section',
    standalone: true,
    template: `
  <footer class="bg-emerald-100">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-cols-2">
    <div class="p-4">
        <h1 class="text-xl font-bold">Footer</h1>
        <p>We build beautiful websites</p>
    </div>

    <div class="p-4">
        <h1 class="text-xl font-bold">Footer</h1>
        <p>We build beautiful websites</p>
    </div>

    <div class="p-4">
  <h1 class="text-xl font-bold">Be Social</h1>
  
  <!-- Icon buttons --> 
  <div class="flex">
  <div class="flex flex-row">
    <div class="flex flex-col">
      <a href="https://www.instagram.com/bauhausresearch/" target="_blank" class="h-8 w-8">
        <img src="assets/svg/instagram-seeklogo.com.svg" alt="Instagram" class="h-full w-full">
      </a>
      <a href="https://www.twitter.com/bauhausresearch/" target="_blank" class="h-8 w-8">
        <img src="assets/svg/twitter-social-media-svgrepo-com.svg" alt="Twitter" class="h-full w-full">
      </a>
      <a href="https://www.youtube.com/channel/UCa2sfi23szBjhLqjlQz88LQ" target="_blank" class="h-8 w-8">
        <img src="assets/svg/youtube-105.svg" alt="YouTube" class="h-full w-full">
      </a>
    </div>
  </div>
</div>

</div>


    <div class="p-4"><ul>
      
    <li>
        <h1 class="text-xl font-bold">Agreements</h1>
    </li>
    <li>
        <button (click)="navigateToNewComponent('/terms')" href="terms.html">Terms and Conditions</button>
    </li>
    <li>
    <button (click)="navigateToNewComponent('/privacy')">Privacy Policy</button>
    </li>
    <li>
    <button (click)="navigateToNewComponent('/cookies')">Cookies Statement</button>
    </li>
</ul>

    </div>
</div>
<!-- create div centered -->
<div class="flex justify-center">
    <div class="flex flex-col items-center">
        <p class="text-sm">© 2022 Bauhaus Research</p>
        <p class="text-sm">All Rights Reserved</p>
    </div>
</div>

<app-newsletter-banner></app-newsletter-banner>
  </footer>
  `,
    styles: [],
    imports: [CommonModule, NewsletterBannerComponent]
})
export class FooterSectionComponent {
    constructor(private router: Router) {}
  
    @Input() routeLink?: string;
  
    navigateToNewComponent(routeLink: string) {
      if (routeLink) {
        this.router.navigate([routeLink]);
      } else {
        throw new Error('Invalid route link provided.');
      }
    }
  
    urlLauncher() {
      // Implement your URL launching logic here
    }
  }