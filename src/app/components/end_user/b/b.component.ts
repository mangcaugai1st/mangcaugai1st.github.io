import { Component } from '@angular/core';
import {Document} from "../../../Models/document.model";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  document : Document[];
  constructor() {
    this.document = [
      {file_name: 'Thành phần Melaleuca trong API Melafix.pdf', release_date: new Date("2021-03")},
      {file_name: 'Blyxa Japonica.pdf', release_date: new Date("2021-05")}, 
    ]
  }
}
