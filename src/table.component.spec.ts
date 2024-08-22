import {TestBed,ComponentFixture,waitForAsync} from '@angular/core/testing'
import { Table } from './table.component';

describe("verify table",()=>{
  let fixture: ComponentFixture<Table>;
  let compInst: Table;
  beforeEach(()=>{
    waitForAsync(()=>{
      TestBed.configureTestingModule(
        {
          imports: [Table]
        }
      ).compileComponents();
    })
  });

  beforeEach(()=>{
    fixture  = TestBed.createComponent(Table);
    compInst = fixture.componentInstance;
  });

  it("verify instance",()=>{
    expect(compInst).toBeDefined();
  });
});