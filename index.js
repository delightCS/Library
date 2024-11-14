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
console.log(library);

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
      <p>Status: <span class="${book.read ? "text-green-500" : "text-red-500"}">
         ${book.read ? "Read" : "Not Read"}</span></p>
       <button onclick="toggleReadStatus(${index})" class="mt-2 bg-gray-200 p-1 rounded">
         ${book.read ? "Mark as Unread" : "Mark as Read"}
    </button>

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

// // Updated Book constructor to include read status
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read; // New property for read status
// }

// // Updated addBookToLibrary function to capture read status
// function addBookToLibrary(book) {
//   library.push(book);
//   displayBooks();
// }

// // Modified displayBooks function
// function displayBooks() {
//   bookList.innerHTML = ""; // Clear previous display

//   library.forEach((book, index) => {
//     const bookCard = document.createElement("div");
//     bookCard.classList = "p-4 bg-white shadow rounded-md";

//     // Display book details and read status
//     bookCard.innerHTML = `
//       <h2 class="text-xl font-bold">${book.title}</h2>
//       <p>Author: ${book.author}</p>
//       <p>Pages: ${book.pages}</p>
//       <p>Status: <span class="${book.read ? 'text-green-500' : 'text-red-500'}">
//         ${book.read ? 'Read' : 'Not Read'}</span></p>
//       <button onclick="toggleReadStatus(${index})" class="mt-2 bg-gray-200 p-1 rounded">
//         ${book.read ? 'Mark as Unread' : 'Mark as Read'}
//       </button>
//       <button onclick="removeBook(${index})" class="mt-2 text-red-500">Remove</button>
//     `;

//     bookList.appendChild(bookCard);
//   });
// }

// // Function to handle form submission with read status
// bookForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = document.getElementById("pages").value;
//   const read = document.getElementById("readStatus").checked; // Capture read status

//   const newBook = new Book(title, author, pages, read);
//   addBookToLibrary(newBook);

//   // Reset form
//   bookForm.reset();
// });

// // Function to toggle read status
// function toggleReadStatus(index) {
//   library[index].read = !library[index].read; // Toggle the read status
//   displayBooks();
// }
