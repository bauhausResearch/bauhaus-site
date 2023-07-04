import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="fixed top-0 right-0 p-10">
  <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red</button>
  <div class="h-10 w-80 bg-cyan-600"></div>
</div>
  `,
  styles: [
  ]
})
export class NavBtnComponent {
  
}