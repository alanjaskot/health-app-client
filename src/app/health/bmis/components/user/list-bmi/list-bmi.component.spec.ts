import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBmiComponent } from './list-bmi.component';

describe('ListBmiComponent', () => {
  let component: ListBmiComponent;
  let fixture: ComponentFixture<ListBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBmiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
