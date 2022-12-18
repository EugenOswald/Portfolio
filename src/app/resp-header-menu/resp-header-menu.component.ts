import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resp-header-menu',
  templateUrl: './resp-header-menu.component.html',
  styleUrls: ['./resp-header-menu.component.scss'],
})
export class RespHeaderMenuComponent implements OnInit {
  constructor(@Inject(TranslateService) public translate: TranslateService) {}

  ngOnInit(): void {}
}
