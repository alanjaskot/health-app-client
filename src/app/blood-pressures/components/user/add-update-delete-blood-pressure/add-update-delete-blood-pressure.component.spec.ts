import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteBloodPressureComponent } from './add-update-delete-blood-pressure.component';

describe('AddUpdateDeleteBloodPressureComponent', () => {
  let component: AddUpdateDeleteBloodPressureComponent;
  let fixture: ComponentFixture<AddUpdateDeleteBloodPressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteBloodPressureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDeleteBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
