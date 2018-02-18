
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookControlService } from '../book-control.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  // book = {};

  constructor(private router: Router,
              private _bookControlService: BookControlService,
              private http: HttpClient) { }

  ngOnInit() {
    if(this._bookControlService.isNewForm) {
      console.log("Change state in nginit");
      this._bookControlService.isNewForm = false;
      console.log("the state: " + this._bookControlService.isNewForm);
    }
    // this.clearForm();    
  }

  onReset(form: NgForm) {
    form.reset();
  }

  clearForm(){
    this._bookControlService.book = {
      _id: "",
      isbn: "",
      title: "",
      author: "",
      description: "",
      published_year: "",
      publisher: "",
      updated_date: ""
    }
  }

  saveBook(form: NgForm) {

    this._bookControlService.addNewBook()
      .subscribe(res => {
        console.log(res);
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
      form.reset();
  }  

  // saveBook() {
  //   this.http.post('/book', this.book)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/book-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // } // ORIGINAL

}