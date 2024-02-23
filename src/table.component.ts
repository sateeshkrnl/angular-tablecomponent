import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'table-comp',
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <th *ngFor='let col of cols'>
          <ng-template [ngIf]="cond(col)" [ngIfElse]="elseBlock">
            <input type="checkbox" />
          </ng-template>
          <ng-template #elseBlock>{{col}}</ng-template>
        </th>
      </thead>
    </table>
  `,
  styles: ['table{ background-color: #ff0000}']
})
export class Table {
  @Input()
  cols!: string[];
  cond(col: string):boolean{
    return col=='select';
  }
}