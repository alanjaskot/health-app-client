import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent {
  @Input() urlForRow = '';
  @Input() displayedColumns: string[];
  @Input() dataTable: any[];

  constructor(private router: Router) {}

  routeTo(id: string): void {
    console.log('id to =>', id);
    const url = `${this.urlForRow}/${id}`;
    this.router.navigate([url]);
  }

  isObjectArray(object: any): boolean {
    return Array.isArray(object);
  }

  displayingColumnsNames(): string {
    return JSON.stringify(this.dataTable);
  }

  handleRowClick(row: any): void {

  }
}
