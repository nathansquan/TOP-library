let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const addToLibraryBtn = document.querySelector(".add");

addToLibraryBtn.addEventListener('click', () => {
    const book = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(book);
    displayBook(book);
});

function displayBook(book) {
    // create book card
    const card = document.createElement('div');
    card.classList.add('book');
    card.textContent = book.info();
    container.appendChild(card);
};

function displayBooks() {
    myLibrary.forEach(book => {
        displayBook(book);
    }); 
}

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


// sample data
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit2 = new Book('The Hobbit2', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit3 = new Book('The Hobbit3', 'J.R.R. Tolkein', 295, 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);


const container = document.querySelector('.container');

displayBooks();
