import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTogetherComponent } from './work-together.component';

describe('WorkTogetherComponent', () => {
  let component: WorkTogetherComponent;
  let fixture: ComponentFixture<WorkTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTogetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
