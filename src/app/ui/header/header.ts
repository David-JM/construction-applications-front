import { Component, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
  title = signal('Ciudadela del futuro');
}
