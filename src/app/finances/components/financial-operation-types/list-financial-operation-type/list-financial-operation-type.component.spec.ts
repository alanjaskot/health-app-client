import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinancialOperationTypeComponent } from './list-financial-operation-type.component';

describe('ListFinancialOperationTypeComponent', () => {
  let component: ListFinancialOperationTypeComponent;
  let fixture: ComponentFixture<ListFinancialOperationTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFinancialOperationTypeComponent]
    });
    fixture = TestBed.createComponent(ListFinancialOperationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
