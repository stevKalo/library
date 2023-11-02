// grab add button by id
// add event listener to it
// on event mousedown
// prompt user for Name, Author, and Read Boolean

const add = document.querySelector("#add");
const modal = document.querySelector("#modal");

add.addEventListener("mousedown", () => {
  modal.showModal();
});
