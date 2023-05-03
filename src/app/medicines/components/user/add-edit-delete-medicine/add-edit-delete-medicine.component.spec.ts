import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteMedicineComponent } from './add-edit-delete-medicine.component';

describe('AddEditDeleteMedicineComponent', () => {
  let component: AddEditDeleteMedicineComponent;
  let fixture: ComponentFixture<AddEditDeleteMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDeleteMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
