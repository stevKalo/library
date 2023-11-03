// grab add button by id
// add event listener to it
// on event mousedown
// prompt user for Name, Author, and Read Boolean

const library = document.querySelector(".library");
const add = document.querySelector("#add");

const modal = document.querySelector("#modal");
const modalBtn = document.querySelector(".modal-add");
const modalTitle = document.querySelector(".modal-title");
const modalAuthor = document.querySelector(".modal-author");
const modalRead = document.querySelector(".modal-read");

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

const constrCard = function (book) {
  const index = document.querySelectorAll(".card").length + 1;

  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("id", `card${index}`);

  const newTitle = document.createElement("h2");
  newTitle.textContent = book.title;

  const newAuthor = document.createElement("p");
  newAuthor.classList.add("author");
  newAuthor.textContent = book.author;

  const newRead = document.createElement("p");
  newRead.classList.add("read", "material-symbols-outlined");
  if (book.read) {
    newRead.textContent = "check";
  } else {
    newRead.textContent = "cancel";
  }

  library.appendChild(newCard);
  newCard.appendChild(newTitle).appendChild(newAuthor).appendChild(newRead);
};

add.addEventListener("mouseup", () => {
  modal.showModal();
});

modalBtn.addEventListener("mouseup", () => {
  const title = modalTitle.value;
  const author = modalAuthor.value;
  const read = modalRead.checked;
  const newBook = new Book(title, author, read);
  constrCard(newBook);
  modal.close();
});
