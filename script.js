// DOM elements
const library = document.querySelector('.library');
const add = document.querySelector('#add');
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('.modal-add');
const modalTitle = document.querySelector('.modal-title');
const modalAuthor = document.querySelector('.modal-author');
const modalStatus = document.querySelector('.modal-status');

// Book class
class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

// Function to clear modal inputs
function modalClear() {
  modalTitle.value = '';
  modalAuthor.value = '';
  modalStatus.checked = false;
}

// Construct card element for a book and append it to the library
const constrCard = function (book) {
  const index = document.querySelectorAll('.card').length + 1;

  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.setAttribute('id', `card${index}`);

  const newTitle = document.createElement('h2');
  newTitle.textContent = book.title;

  const newAuthor = document.createElement('p');
  newAuthor.classList.add('author');
  newAuthor.textContent = book.author;

  if (!book.status) {
    newCard.classList.add('unread');
  }

  library.appendChild(newCard);
  newCard.appendChild(newTitle).appendChild(newAuthor);
};

// Event listeners
add.addEventListener('mouseup', () => {
  modal.showModal();
});

modalBtn.addEventListener('mouseup', () => {
  const title = modalTitle.value;
  const author = modalAuthor.value;
  const status = modalStatus.checked;
  const newBook = new Book(title, author, status);
  constrCard(newBook);
  modalClear();
  modal.close();
});
