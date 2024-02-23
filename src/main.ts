import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {Table} from './table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Table],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <table-comp [cols]="['select','select2','name','age']" />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
