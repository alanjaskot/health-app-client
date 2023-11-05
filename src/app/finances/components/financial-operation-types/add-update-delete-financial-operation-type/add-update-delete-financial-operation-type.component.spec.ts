import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteFinancialOperationTypeComponent } from './add-update-delete-financial-operation-type.component';

describe('AddUpdateDeleteFinancialOperationTypeComponent', () => {
  let component: AddUpdateDeleteFinancialOperationTypeComponent;
  let fixture: ComponentFixture<AddUpdateDeleteFinancialOperationTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateDeleteFinancialOperationTypeComponent]
    });
    fixture = TestBed.createComponent(AddUpdateDeleteFinancialOperationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
