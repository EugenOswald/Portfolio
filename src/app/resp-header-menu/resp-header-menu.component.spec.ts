import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespHeaderMenuComponent } from './resp-header-menu.component';

describe('RespHeaderMenuComponent', () => {
  let component: RespHeaderMenuComponent;
  let fixture: ComponentFixture<RespHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespHeaderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
