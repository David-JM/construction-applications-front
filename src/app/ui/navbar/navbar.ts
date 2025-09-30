import { Component, input, signal } from '@angular/core';
import { menuOptions } from '../../core/menu-options';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  title = input.required();

  menuOptions = signal(menuOptions);
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
}
