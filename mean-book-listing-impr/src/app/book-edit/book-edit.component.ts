
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookControlService } from '../book-control.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  // constructor(private router: Router, private route: ActivatedRoute,
  //             private _bookControlService: BookControlService) { }

  // ngOnInit() {
  //   this.getBookEditDetails(this.route.snapshot.params["id"]);
  // }

  // getBookEditDetails(id) {
  //   this._bookControlService.getSingleBook(id)
  //   .subscribe(data => {
  //     this._bookControlService.book = data;
  //   });
  // }

  // updateBook(id) {
  //  this._bookControlService.updateBook(id)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/book-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  book: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("nginit book-edit getBook");
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id) {
    this.book.updated_date = Date.now();
    this.http.put('/book/'+id, this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}