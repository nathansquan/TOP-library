function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function displayBook(book) {
    // create book card
    const card = document.createElement('div');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "X";
    removeBtn.classList = "remove-book-btn";
    const ul = document.createElement('ul');
    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.innerText = "Toggle read status";
    toggleReadBtn.classList = "toggle-read-btn";
    card.classList.add('book');
    card.appendChild(removeBtn);
    card.appendChild(ul);
    card.appendChild(toggleReadBtn);
    container.appendChild(card);

    // associate DOM elements to book object
    const lastIndex = myLibrary.length - 1;
    card.dataset.bookId = lastIndex.toString();

    // build list of book info
    for (const property in book) {
        const li = document.createElement('li');
        li.innerHTML = `${property}: ${book[property]}`;
        ul.appendChild(li);
    }
};

let myLibrary = [];
const container = document.querySelector('.container');
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#radio-btns");
const form = document.querySelector("form");
let removeBookBtns = document.querySelectorAll(".remove-book-btn");

// remove book
// use event bubbling to add event listener to each x button in a new card created
container.addEventListener('click', (e) => {
    if (e.target.classList.contains("remove-book-btn")) {
        const cardToRemove = e.target.parentElement;
        const index = cardToRemove.dataset.bookId;
        cardToRemove.remove();
        myLibrary[index] = null;
    }
});

// new book submit button event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const book = new Book();
    data.forEach((value, key) => (book[key] = value));
    myLibrary.push(book);
    displayBook(book);
});


// open popup form
const newBookBtn = document.querySelector('.new-book-btn > button');

newBookBtn.addEventListener('click', () => {
    document.getElementById("new-book-form").style.display = "block";
});

// close popup form
const cancelBtn = document.querySelector('.cancel');

cancelBtn.addEventListener('click', () => {
    document.getElementById("new-book-form").style.display = "none";
});

