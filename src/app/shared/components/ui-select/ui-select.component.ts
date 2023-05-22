import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css'],
})
export class UiSelectGroupComponent {
  @Input() label = '';
  @Input() control: UntypedFormControl;
  @Input() options: any[] | any = [];
  @Input() placeholder?: string;
  @Input() selected: string[] = [];
  @Input() isMultiple = true;
  @Input() disabled = false;
  @Input() isRequired = false;

  @Output() readonly changeHandler: EventEmitter<MatSelectChange> =
    new EventEmitter<MatSelectChange>();

  constructor() {}

  onChange(event: MatSelectChange): void {
    this.changeHandler.emit(event);
  }
}
