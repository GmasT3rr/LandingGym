import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }

  @HostListener('window:scroll', ['$event'])


  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 300) {
      element.classList.add('navbar-scrolled','nav-link-scrolled');
    } else {
      element.classList.remove('navbar-scrolled','nav-link-scrolled');
    }
  }

}
