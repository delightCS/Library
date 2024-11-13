const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");
const showDialog = document.querySelector("svg");
const showForm = document.querySelector("dialog");
const closeBtn = document.querySelector("#close");
const confirmBtn = document.querySelector("#confirm");

// Book constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Library array to store books
let library = [];

// Function to add book to library and display it
function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

// Function to display books as cards
function displayBooks() {
  bookList.innerHTML = "";

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList = "p-4 bg-white shadow rounded-md";

    bookCard.innerHTML = `
      <h2 class="text-xl font-bold">${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button onclick="removeBook(${index})" class="mt-2 text-red-500">Delete</button>
    `;

    bookList.appendChild(bookCard);
  });
}

// Function to show form dialog
showDialog.addEventListener("click", () => {
  showForm.showModal();
});

// Function to handle form submission
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  const newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);
  showForm.close();

  // Reset form
  bookForm.reset();
});

// Function to close form dialog
closeBtn.addEventListener("click", () => {
  showForm.close();
});

// Function to remove a book
function removeBook(index) {
  library.splice(index, 1);
  displayBooks();
}
