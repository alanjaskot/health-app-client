import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlideToggleComponent } from './ui-slide-toggle.component';

describe('UiSlideToggleComponent', () => {
  let component: UiSlideToggleComponent;
  let fixture: ComponentFixture<UiSlideToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSlideToggleComponent],
    });
    fixture = TestBed.createComponent(UiSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
