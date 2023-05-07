import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectGroupComponent } from './ui-select.component';

describe('UiSelectGroupComponent', () => {
  let component: UiSelectGroupComponent;
  let fixture: ComponentFixture<UiSelectGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSelectGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSelectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
