import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiTextInputComponent } from './components/ui-text-input/ui-text-input.component';
import { MaterialModule } from '../modules/material.module';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  declarations: [UiButtonComponent, UiTextInputComponent],
  exports: [UiButtonComponent, UiTextInputComponent],
})
export class SharedModule {}
