const bookTitle = document.querySelector("#book-title");
const myTable = document.querySelector("#myTable");
const addBtn = document.querySelector("#addBtn");

// create Book constructor
function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead ? "already read" : "not read yet";
}

//cerate Library array to store book objects
const library = [];

//take books input from user and add to library
function addBooks(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  library.push(newBook);
}

//Add Button Functionality
addBtn.addEventListener("click", () => {
  //create new row and cells
  const newRow = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const isReadCell = document.createElement("td");

  //take book details from user
  const title = prompt("Enter the book title");
  const author = prompt("Enter the book author");
  const pages = prompt("Enter the book pages");
  const isRead = confirm(
    "Have you read this book? Click ok if you read this book otherwise click on Cancel"
  );

  addBooks(title, author, pages, isRead);

  //get the latest book added to the library
  const latestBook = library[library.length - 1];

  //adding text into the cell
  titleCell.textContent = latestBook.title;
  authorCell.textContent = latestBook.author;
  pagesCell.textContent = latestBook.pages;
  isReadCell.textContent = latestBook.isRead;

  //append cells into the row
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pagesCell);
  newRow.appendChild(isReadCell);

  //append new rows into the table
  myTable.appendChild(newRow);
});

//Adding some initial books to the library
addBooks("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBooks("To Kill a Mockingbird", "Harper Lee", 281, false);

// Display the initial books
library.forEach((book) => {
  const newRow = myTable.insertRow();
  newRow.insertCell().textContent = book.title;
  newRow.insertCell().textContent = book.author;
  newRow.insertCell().textContent = book.pages;
  newRow.insertCell().textContent = book.isRead;
});
