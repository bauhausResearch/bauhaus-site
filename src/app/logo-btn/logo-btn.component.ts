import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-btn',
  standalone: true,
  template: `
    <div #boxElement class="absolute top-0 left-0 p-10 grid grid-col-2">
      <button id="colorLogo" class="fix h-10 w-10 bg-red-600" (click)="goToNewPage()"></button>
      <div id="logo" class="abs top-10 left-20 h-10 w-10" [class.hidden]="!isBoxVisible" [class.animate]="animateBox"></div>
      <div id="logo" class="fix top-10 left-20 h-10 w-10 bg-cyan-600" [class.hidden]="!isBoxVisible" [class.animate]="animateBox"></div>
    </div>
  `,
  styles: [`
    .fix {
      position: fixed;
    }

    .abs {
      position: absolute;
    }

    #logo {
      opacity: 1;
      transition: opacity 0.5s;
    }

    .hidden {
      opacity: 0;
      transform: translateY(-20px);
    }

    .animate {
      animation: fade-in 1s;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class LogoBtnComponent implements OnInit {
  constructor(private router: Router) {}

  goToNewPage() {
    this.router.navigate(['/home']); // Replace '/home' with the actual route path of the new page
  }

  @ViewChild('boxElement', { static: true }) boxElementRef!: ElementRef<HTMLDivElement>;
  isBoxVisible: boolean = true;
  animateBox: boolean = true;
  logoColor = 'bg-cyan-600';
  intersectionObserver: IntersectionObserver | undefined;
  boxColor: '#0000ff' | undefined;

  ngOnInit() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.handleIntersection(entries);
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );

    this.intersectionObserver.observe(this.boxElementRef.nativeElement);
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    const isVisible = entries[0].isIntersecting;
    if (isVisible) {
      this.isBoxVisible = true;
      this.animateBox = true;
    } else {
      this.isBoxVisible = false;
      this.animateBox = false;
    }
  }
}
