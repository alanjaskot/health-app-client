import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinancialOperationComponent } from './list-financial-operation.component';

describe('ListFinancialOperationComponent', () => {
  let component: ListFinancialOperationComponent;
  let fixture: ComponentFixture<ListFinancialOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFinancialOperationComponent]
    });
    fixture = TestBed.createComponent(ListFinancialOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
