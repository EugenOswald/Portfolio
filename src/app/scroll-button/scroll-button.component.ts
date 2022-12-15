import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
})
export class ScrollButtonComponent implements OnInit {
  constructor() {}
  showButton = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const threshold = 100;
    this.showButton = window.pageYOffset > threshold;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
