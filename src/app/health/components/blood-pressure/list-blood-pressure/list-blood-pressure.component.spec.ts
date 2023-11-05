import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloodPressureComponent } from './list-blood-pressure.component';

describe('ListBloodPressureComponent', () => {
  let component: ListBloodPressureComponent;
  let fixture: ComponentFixture<ListBloodPressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBloodPressureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
