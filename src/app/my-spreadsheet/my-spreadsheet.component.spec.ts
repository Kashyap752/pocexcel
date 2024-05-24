import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpreadsheetComponent } from './my-spreadsheet.component';

describe('MySpreadsheetComponent', () => {
  let component: MySpreadsheetComponent;
  let fixture: ComponentFixture<MySpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpreadsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
