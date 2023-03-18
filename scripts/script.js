let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        // create book card
        const card = document.createElement('div');
        card.classList.add('book');
        card.textContent = book.info();
        container.appendChild(card);
    }); 
}

// sample data
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit2 = new Book('The Hobbit2', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit3 = new Book('The Hobbit3', 'J.R.R. Tolkein', 295, 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);


const container = document.querySelector('.container');

displayBooks();
