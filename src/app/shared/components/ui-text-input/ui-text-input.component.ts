import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-text-input',
  templateUrl: './ui-text-input.component.html',
  styleUrls: ['./ui-text-input.component.scss'],
})
export class UiTextInputComponent {
  @Input() label = '';
  @Input() control: UntypedFormControl;
  @Input() placeholder?: string;
  @Input() required = false;
  @Input() messages = '';
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
}
