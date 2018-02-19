
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BookControlService } from '../book-control.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private _bookControlService: BookControlService) { }

  ngOnInit() {
    console.log("in ngOnInit book-detail. getBookDetail()");
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this._bookControlService.getSingleBook(id)
    .subscribe(data => {
      this._bookControlService.book = data;
    });
    console.log("getBookDetail(): " + id)
  }

  deleteBook(id) {
    this._bookControlService.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
      console.log("Book deleted: " + id);
  }

}
