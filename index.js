const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");
const showDialog = document.querySelector("svg");
const showForm = document.querySelector("dialog");
const closeBtn = document.querySelector("#close");
const confirmBtn = document.querySelector("#confirm");

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
    bookCard.classList = "p-4 bg-white shadow rounded-md w-72 relative";

    bookCard.innerHTML = `
    <div class="z-[100]">
      <h2 class="text-2xl font-bold">${book.title}</h2>
      </div>
      <div class="">
      <p class="trunctae">by: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: <span class="${book.read ? "text-green-500" : "text-red-500"}">
        ${book.read ? "Read" : "Not Read"}</span></p>
        </div>
      <div class="">
      <button onclick="toggleReadStatus(${index})" class="bg-gray-200 p-1 rounded mr-4">
        ${book.read ? "Not read" : "Read"}
      </button>

      <button onclick="removeBook(${index})" class="text-red-500">Delete</button>
      </div>
    `;

    bookList.appendChild(bookCard);
  });
}

// Function to show form dialog
showDialog.addEventListener("click", () => {
  showForm.showModal();
});

// Function to handle form submission
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const newBook = new Book(title, author, pages, read);
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

// Function to toggle read status
function toggleReadStatus(index) {
  library[index].read = !library[index].read; // Toggle the read status
  displayBooks();
}
``;
