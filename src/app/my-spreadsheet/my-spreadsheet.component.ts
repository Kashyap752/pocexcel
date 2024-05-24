import { Component } from '@angular/core';
import { sheets } from '../sheets';
import { SheetDescriptor } from '@progress/kendo-angular-spreadsheet';
import { DMSheets } from '../DMschedule';

@Component({
  selector: 'app-my-spreadsheet',
  templateUrl: './my-spreadsheet.component.html',
  styleUrls: ['./my-spreadsheet.component.css']
})
export class MySpreadsheetComponent {
  public sheets: SheetDescriptor[] = DMSheets;
}
