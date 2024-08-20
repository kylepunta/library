const library = [];

function Book (title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary (book){
    library.push(book);
};

function addNewBook (newBook) {
    let bookList = document.querySelector('.book-list');

    let bookCard = document.createElement('div');
    let bookCardTitle = document.createElement('div');
    let bookCardAuthor = document.createElement('div');
    let bookCardPages = document.createElement('div');

    bookCard.classList.add('book-card');
    bookCardTitle.classList.add('book-card-title');
    bookCardAuthor.classList.add('book-card-author');
    bookCardPages.classList.add('book-card-pages');
    
    bookList.appendChild(bookCard);
    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardPages);

    let titleHeading = document.createElement('h3');
    let authorHeading = document.createElement('h3');
    let pagesHeading = document.createElement('h3');

    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');

    titleHeading.textContent = "Title: ";
    authorHeading.textContent = "Author: ";
    pagesHeading.textContent = "Pages: ";

    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = newBook.author;
    bookPages.textContent = newBook.pages;

    bookCardTitle.appendChild(titleHeading);
    bookCardTitle.appendChild(bookTitle);
    bookCardAuthor.appendChild(authorHeading);
    bookCardAuthor.appendChild(bookAuthor);
    bookCardPages.appendChild(pagesHeading);
    bookCardPages.appendChild(bookPages);

    let bookCardDelete = document.createElement('div');
    bookCardDelete.classList.add('book-card-delete');
    bookCard.appendChild(bookCardDelete);

    let deleteBookBtn = document.createElement('button');
    deleteBookBtn.classList.add('delete-button');
    deleteBookBtn.textContent = "Delete Book";
    bookCardDelete.appendChild(deleteBookBtn);

    // Find the index for the book

    let bookIndex = 0;

    for (let i = 0; i < library.length; i++){
        let currentBook = library[i];
        if (currentBook === newBook){
            bookIndex = i;
        }
    }

    bookCard.setAttribute('data-index', bookIndex);

    deleteBookBtn.addEventListener('click', () => {
        deleteBook(bookIndex);
    })
};

function showBooks() {
    for (let i = 0; i < library.length; i++){
        addNewBook(library[i]);
    }
};

function deleteBook (bookIndex) {
    library.splice(bookIndex, 1);
    let bookToDelete = document.querySelector(`[data-index="${bookIndex}"]`);
    bookToDelete.remove();
    totalBooks.textContent = library.length;
};

const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const bookTwo = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const bookThree = new Book('To Kill A Mockingbird', 'Harper Lee', 281);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

showBooks();

const openDialog = document.querySelector('.open-dialog');
const formDialog = document.querySelector('.form-dialog');
const closeDialog = document.querySelector('.close-dialog');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('form');
const totalBooks = document.querySelector('.book-numbers');
totalBooks.textContent = library.length;

openDialog.addEventListener('click', () => {
    formDialog.showModal();
});

closeDialog.addEventListener('click', () => {
    formDialog.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

submitBtn.addEventListener('click', () => {
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let newPages = document.querySelector('#pages').value;
    let newBook = new Book(newTitle, newAuthor, newPages);
    addBookToLibrary(newBook);
    addNewBook(newBook);
    totalBooks.textContent = library.length;
});