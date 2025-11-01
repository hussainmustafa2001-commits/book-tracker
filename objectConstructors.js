const bookTitle = document.querySelector("#book-title");
const myTable = document.querySelector("#myTable");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const popupForm = document.getElementById("popupForm");
const closePopup = document.getElementById("closePopup");

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
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.type = "button";
  deleteCell.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
});

//Add Button Functionality
addBtn.addEventListener("click", () => {
  popupForm.classList.remove("hidden");
  //create new row and cells
  const newRow = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const isReadCell = document.createElement("td");
  const deleteBtnCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  addBooks(title, author, pages, isRead);

  //get the latest book added to the library
  const latestBook = library[library.length - 1];

  //adding text into the cell
  titleCell.textContent = latestBook.title;
  authorCell.textContent = latestBook.author;
  pagesCell.textContent = latestBook.pages;
  isReadCell.textContent = latestBook.isRead;
  //delete button functionality for each row
  deleteBtnCell.appendChild(deleteBtn);

  //append cells into the row
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pagesCell);
  newRow.appendChild(isReadCell);
  newRow.appendChild(deleteBtnCell);

  //append new rows into the table
  myTable.appendChild(newRow);

  //Delete Button Functionality for each row
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
});

//popup form close functionality
closePopup.addEventListener("click", () => {
  popupForm.classList.add("hidden");
});

//Remove Button Functionality
removeBtn.addEventListener("click", () => {
  library.length = 0;

  myTable.innerHTML = `
     <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read Status</th>
        </tr>
  `;

  alert("All books removed!!");
});
