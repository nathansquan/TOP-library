function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
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

    for (const property in book) {
        const li = document.createElement('li');
        li.innerHTML = `${property}: ${book[property]}`;
        ul.appendChild(li);
    }
};

function displayBooks() {
    myLibrary.forEach(book => displayBook(book)); 
}

let myLibrary = [];
const container = document.querySelector('.container');
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#radio-btns");
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const book = new Book();
    data.forEach((value, key) => (book[key] = value));
    addBookToLibrary(book);
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


// sample data
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit2 = new Book('The Hobbit2', 'J.R.R. Tolkein', 295, 'not read yet');
const theHobbit3 = new Book('The Hobbit3', 'J.R.R. Tolkein', 295, 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);



displayBooks();
