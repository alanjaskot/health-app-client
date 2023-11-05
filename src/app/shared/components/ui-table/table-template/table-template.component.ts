import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent {
@Input() columnName: string;
@Input() element: any;

}
