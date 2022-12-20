import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintHeaderComponent } from './imprint-header.component';

describe('ImprintHeaderComponent', () => {
  let component: ImprintHeaderComponent;
  let fixture: ComponentFixture<ImprintHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprintHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
