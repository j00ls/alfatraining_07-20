class Book {

    progress: Number;
    bookshelf: string;
    lent: string;
    show: string;
    showProgress: string;
    showBookshelf: string;
    showLent: string;

    constructor(title: string, pageCount: number, curPageCount: number, bookshelf?: string, lent?: string) {
        this.show = "Book Title: " + title + " | Total Pages: " + pageCount + " | Current Page: " + curPageCount;
        this.progress = Number(curPageCount) / Number(pageCount) *100;
        this.bookshelf = bookshelf;
        this.showProgress = "Current reading progress: " + Math.round(Number(this.progress)) + "%";
        if (bookshelf) {
          this.showBookshelf = "This book is shelved on bookshelf: " + bookshelf;
        } else {
          this.showBookshelf = "This book has not been shelved yet.";
        }
        if (lent) {
          this.showLent = "This book has been lent to: " + lent;
        } else {
          this.showLent = "This book has not been lent and should be around somewhere.";
        }
    }
}

class BookShelf {

  id: string;
  books: Array<Book>;

  constructor(id: string, books: Array<Book>) {
    this.books = books;
  }
}

const books: Book[] = [
  new Book("book1", 54, 12, "home" )
]

//let bookshelf = new BookShelf("home", books[0]);

/***
console.log(book1.show)
console.log(book1.showProgress)
console.log(book1.showBookshelf)
*/

//console.log(bookshelf)
