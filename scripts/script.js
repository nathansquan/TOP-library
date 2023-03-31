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
    card.classList.add('book');
    card.appendChild(removeBtn);
    card.appendChild(ul);
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

function displayBooks() {
    myLibrary.forEach(book => displayBook(book)); 
}

function updateLibrary() {
    removeBookBtns = document.querySelectorAll(".remove-book-btn");
}

// remove book
function removeBook() {
    removeBookBtns = document.querySelectorAll(".remove-book-btn");
    removeBookBtns.forEach((btn) => {
        const cardToRemove = btn.parentElement;
        cardToRemove.remove;
        removeBookBtns = document.querySelectorAll(".remove-book-btn");
    });
}

let myLibrary = [];
const container = document.querySelector('.container');
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#radio-btns");
const form = document.querySelector("form");
let removeBookBtns = document.querySelectorAll(".remove-book-btn");

// when i click on a x button, that card will be removed and the book data will
// be removed from the myLibrary array
// use event bubbling to add event listener to each x button in a new card created
container.addEventListener('click', (e) => {
    if (e.target.classList.contains("remove-book-btn")) {
        const cardToRemove = e.target.parentElement;
        cardToRemove.remove();
    }
});



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const book = new Book();
    data.forEach((value, key) => (book[key] = value));
    myLibrary.push(book);
    displayBook(book);
    updateLibrary();
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

displayBooks();
