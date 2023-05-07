import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.css'],
})
export class UiDatepickerComponent {
  @Input() label = '';
  @Input() control: UntypedFormControl;
  @Input() placeholder?: string;
  @Input() required = true;
  @Input() selected: boolean;
  @Input() min: Date;

  @Output() readonly changeHandler: EventEmitter<MatDatepickerInputEvent<Date>> = new EventEmitter<
    MatDatepickerInputEvent<Date>
  >();

  onChange(event: MatDatepickerInputEvent<Date>): void {
    this.changeHandler.emit(event);
  }
}
