import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent {
  @Input() urlForRow = '';
  @Input() displayingColumns: string[];
  @Input() dataTable: any[];
}
