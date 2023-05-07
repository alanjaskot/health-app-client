import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiTextInputComponent } from './components/ui-text-input/ui-text-input.component';
import { MaterialModule } from '../modules/material.module';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from './components/ui-table/ui-table.component';
import { UiSelectGroupComponent } from './components/ui-select/ui-select.component';
import { UiDatepickerComponent } from './components/ui-datepicker/ui-datepicker.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    UiButtonComponent,
    UiDatepickerComponent,
    UiSelectGroupComponent,
    UiTableComponent,
    UiTextInputComponent,
  ],
  exports: [
    UiButtonComponent,
    UiDatepickerComponent,
    UiSelectGroupComponent,
    UiTableComponent,
    UiTextInputComponent,
  ],
})
export class SharedModule {}
