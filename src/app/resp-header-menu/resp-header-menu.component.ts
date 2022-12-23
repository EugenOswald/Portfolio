import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resp-header-menu',
  templateUrl: './resp-header-menu.component.html',
  styleUrls: ['./resp-header-menu.component.scss'],
})
export class RespHeaderMenuComponent implements OnInit {
  constructor(@Inject(TranslateService) public translate: TranslateService) {}
  ngOnInit(): void {}

  @ViewChild('menuBtn') menuBtn: ElementRef;
  @ViewChild('header') header: ElementRef;
  openMenu: boolean = false;

  toggleMenu() {
    if (!this.openMenu) {
      this.menuBtn.nativeElement.classList.add('open');
      this.header.nativeElement.classList.add('headerBG-second');
      this.header.nativeElement.classList.remove('header');
      this.openMenu = true;
    } else {
      this.menuBtn.nativeElement.classList.remove('open');
      this.header.nativeElement.classList.remove('headerBG-second');
      this.header.nativeElement.classList.add('header');
      this.openMenu = false;
    }
  }
}
