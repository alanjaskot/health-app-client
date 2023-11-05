import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteBmiComponent } from './add-update-delete-bmi.component';

describe('AddEditDeleteBmiComponent', () => {
  let component: AddUpdateDeleteBmiComponent;
  let fixture: ComponentFixture<AddUpdateDeleteBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateDeleteBmiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUpdateDeleteBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
