import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vert-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <nav class="bg-gray-800 h-screen fixed w-20 z-auto">
  <div class="flex flex-col items-center justify-center h-20">
    <h1 class="text-white text-2xl font-bold">My Navbar</h1>
  </div>
  <ul class="flex flex-col items-center justify-center mt-8">
    <li class="mb-4">
      <a href="#" class="text-white hover:text-gray-300">Home</a>
    </li>
    <li class="mb-4">
      <a href="#" class="text-white hover:text-gray-300">About</a>
    </li>
    <li class="mb-4">
      <a href="#" class="text-white hover:text-gray-300">Services</a>
    </li>
    <li class="mb-4">
      <a href="#" class="text-white hover:text-gray-300">Contact</a>
    </li>
  </ul>
</nav>
  `,
  styles: [
  ]
})
export class VertNavbarComponent {

}
