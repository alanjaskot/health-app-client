import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent {
  @Input() title: string;
  @Input() urlForRow = '';
  @Input() displayedColumns: string[];
  @Input() dataTable: any[];

  constructor(private router: Router) {}

  routeTo(row: any): void {
    console.log('id to =>', row.id);
    const url = `${this.urlForRow}/${row.id}`;
    this.router.navigate([url]);
  }

  isObjectAnArray(object: any): boolean {
    return Array.isArray(object);
  }
}
