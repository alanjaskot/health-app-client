import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ui-slide-toggle',
  templateUrl: './ui-slide-toggle.component.html',
  styleUrls: ['./ui-slide-toggle.component.css'],
})
export class UiSlideToggleComponent {
  @Input() label: string;
  @Input() control: UntypedFormControl;
  @Input() required = false;
  @Input() disabled = false;

  @Output() readonly changeHandler: EventEmitter<MatSlideToggleChange> =
    new EventEmitter<MatSlideToggleChange>();

  onChange(event: MatSlideToggleChange): void {
    this.changeHandler.emit(event);
  }
}
