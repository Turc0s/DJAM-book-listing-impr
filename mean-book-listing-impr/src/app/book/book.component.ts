
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookControlService } from '../book-control.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _bookcontrolService: BookControlService) { }

  ngOnInit() {
    this._bookcontrolService.showAllBooks();
  }

}
