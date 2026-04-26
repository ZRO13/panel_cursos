import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header {

  isMenuOpen = false;
  isOptionsOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isOptionsOpen = false;
  }

  toggleOptions() {
    this.isOptionsOpen = !this.isOptionsOpen;
    this.isMenuOpen = false;
  }
}
