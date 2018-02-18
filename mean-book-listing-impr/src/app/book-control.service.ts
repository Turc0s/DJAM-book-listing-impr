
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from "@angular/http";
import { Book } from './book.model';
import "rxjs/Rx";

@Injectable()
export class BookControlService {

  bookList: Book[];
  // book:Book;
  // newBook: Book = new Book();
  // book: Book;
  // books:any;
  book:any = {};
  isNewForm: boolean = false;

  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get("/book");
  }

  getSingleBook(id: any) {
    return this.httpClient.get("/book/"+id);
  }

  addNewBook() {
    return this.httpClient.post("/book", this.book);
  }

  updateBook(id: any) {
    this.book.updated_date = Date.now();
    return this.httpClient.put("/book/"+id, this.book);
  }

  deleteBook(id: any) {
    return this.httpClient.delete("/book/"+id);
  }

  showAllBooks() {
    this.getAllBooks()
      .subscribe((book: Book[]) => {
        this.bookList = book; 
      });
  }

}
