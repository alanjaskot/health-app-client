import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
})
export class UiButtonComponent {
  @Input() text = 'button';
  @Input() color: 'primary' | 'warn' | 'accent' = 'primary';
  @Input() disabled = false;
  @Input() buttonType: 'raised' | 'mat' | 'fab' | 'icon-button' = 'raised';
  @Input() icon?: string;
  @Input() iconColor?: string;
}
