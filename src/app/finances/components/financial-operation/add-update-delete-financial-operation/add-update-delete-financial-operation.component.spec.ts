import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteFinancialOperationComponent } from './add-update-delete-financial-operation.component';

describe('AddUpdateDeleteFinancialOperationComponent', () => {
  let component: AddUpdateDeleteFinancialOperationComponent;
  let fixture: ComponentFixture<AddUpdateDeleteFinancialOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateDeleteFinancialOperationComponent]
    });
    fixture = TestBed.createComponent(AddUpdateDeleteFinancialOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
