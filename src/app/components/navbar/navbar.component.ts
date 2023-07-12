import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
navLinks = [
  {
    name: 'Home',
    link: 'home',
  },
  {
    name: 'About',
    link: 'about',
  },
  {
    name: 'Projects',
    link: 'projects',
  },
  {
    name: 'Contact Us',
    link: 'contact-us',
  },
];
}
