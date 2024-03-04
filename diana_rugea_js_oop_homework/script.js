function Book(title, author, ISBN) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
}

// Display information about the book
Book.prototype.displayInfo = function () {
  console.log(
    `The book name is ${this.title}, the author name is ${this.author} and the ISBN is ${this.ISBN}`
  );
};

function FictionBook(title, author, ISBN, genre) {
  Book.call(this, title, author, ISBN);
  this.genre = genre;
}

FictionBook.prototype = Object.create(Book.prototype);
FictionBook.prototype.constructor = FictionBook;

// Overriding the displayInfo method to include genre information
FictionBook.prototype.displayInfo = function () {
  console.log(
    `The book name is ${this.title}, the author name is ${this.author}, the ISBN is ${this.ISBN} and the genre is ${this.genre}`
  );
};

function Library(books) {
  this.books = books;
}

// Adding a new book to the library
Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
  console.log(`You added the following book to the Library: ${newBook.title}`);
  console.log(myLibrary);
};

// This function displays all the books that are in the library
Library.prototype.displayBooks = function () {
  this.books.forEach(function (books) {
    console.log(`The library has ${books.title}`);
  });
};

// Each library member should have a name and a list of borrowed books
function Member(name) {
  this.name = name;
  this.bookList = [];
}

// Library members should be able to borrow books from the library
Member.prototype.borrowingBooks = function (borrowedBook) {
  console.log(
    `${this.name} is borrowing the following book: ${borrowedBook.title}`
  );
  this.bookList.push(borrowedBook);
};

// The system should display the contents of books borrowed by a library member both as an individual log for each aswell as an Object
Member.prototype.displayMemberBooks = function () {
  console.log(`${this.name} has borrowed the following books: `);
  this.bookList.forEach(function (book) {
    console.log(`${book.title}`);
  });
  console.log(this);
};

var book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780192832696"
);
var book2 = new FictionBook(
  "Gone with the Wind",
  "Margaret Mitchel",
  "9781783226450",
  "drama"
);
var book3 = new Book("Pride and Prejudice", "Jane Austen", " 9781428108325");
var myBooksArray = [book1, book2];
var myLibrary = new Library(myBooksArray);

// Keeping track of added books
myLibrary.displayBooks();
myLibrary.addBook(book3);
myLibrary.displayBooks();

// Display the info about both types of the books
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

var firstMember = new Member("Alina");

// Creating a new book and adding it to the library
var book4 = new FictionBook(
  "Harry Potter",
  "J.K. Rowling",
  "9780590353427", 
  "drama"
);
myLibrary.addBook(book4);

// Adding books to the first memeber's list & displaying the list of this user's borrowed books
firstMember.borrowingBooks(book1);
firstMember.borrowingBooks(book4);

firstMember.displayMemberBooks();

// Creating a second and a third member and add books to it's list of borrowed books and then display them
var secondMember = new Member("Marcel");

secondMember.borrowingBooks(book2);
secondMember.borrowingBooks(book3);

secondMember.displayMemberBooks();

var thirdMember = new Member("Ilinca");

thirdMember.borrowingBooks(book1);
thirdMember.borrowingBooks(book3);

thirdMember.displayMemberBooks();
