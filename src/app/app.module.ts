import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadsheetModule } from '@progress/kendo-angular-spreadsheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySpreadsheetComponent } from './my-spreadsheet/my-spreadsheet.component';



@NgModule({
  declarations: [
    AppComponent,
    MySpreadsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadsheetModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
