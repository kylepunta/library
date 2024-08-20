const library = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary (book){
    library.push(book);
};

function displayBooks(){
    const container = document.querySelector('.book-list');
    container.innerHTML = '';

    library.forEach((book, index) => {
        const bookCard = document.createElement('div');
        let bookCardTitle = document.createElement('div');
        let bookCardAuthor = document.createElement('div');
        let bookCardPages = document.createElement('div');
        let bookCardRead = document.createElement('div');

        bookCard.classList.add('book-card');
        bookCardTitle.classList.add('book-card-title');
        bookCardAuthor.classList.add('book-card-author');
        bookCardPages.classList.add('book-card-pages');
        bookCardRead.classList.add('book-card-read');

        container.appendChild(bookCard);
        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardRead);
    
        const titleHeading = document.createElement('h3');
        const authorHeading = document.createElement('h3');
        const pagesHeading = document.createElement('h3');
        const readHeading = document.createElement('h3');
    
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const readBtn = document.createElement('button');
    
        readBtn.classList.add('read-button');

        titleHeading.textContent = "Title: ";
        authorHeading.textContent = "Author: ";
        pagesHeading.textContent = "Pages: ";
        readHeading.textContent = "Read: ";
    
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
    
        bookCardTitle.appendChild(titleHeading);
        bookCardTitle.appendChild(bookTitle);
        bookCardAuthor.appendChild(authorHeading);
        bookCardAuthor.appendChild(bookAuthor);
        bookCardPages.appendChild(pagesHeading);
        bookCardPages.appendChild(bookPages);
        bookCardRead.appendChild(readHeading);
        bookCardRead.appendChild(readBtn);
    
        let bookCardDelete = document.createElement('div');
        bookCardDelete.classList.add('book-card-delete');
        bookCard.appendChild(bookCardDelete);
    
        let deleteBookBtn = document.createElement('button');
        deleteBookBtn.classList.add('delete-button');
        deleteBookBtn.textContent = "Delete Book";
        bookCardDelete.appendChild(deleteBookBtn);

        bookCard.setAttribute('data-index', index);

        deleteBookBtn.addEventListener('click', () => {
            deleteBook(index);
        })
    
        readBtn.addEventListener('click', () => {
            book.toggleReadStatus();
            if (book.read === true){
                readBtn.classList.add('is-read');
            }
            else {
                readBtn.classList.remove('is-read');
            }
        })    
    });
};

// function addNewBook (newBook) {
//     let bookList = document.querySelector('.book-list');

//     let bookCard = document.createElement('div');
//     let bookCardTitle = document.createElement('div');
//     let bookCardAuthor = document.createElement('div');
//     let bookCardPages = document.createElement('div');
//     let bookCardRead = document.createElement('div');

//     bookCard.classList.add('book-card');
//     bookCardTitle.classList.add('book-card-title');
//     bookCardAuthor.classList.add('book-card-author');
//     bookCardPages.classList.add('book-card-pages');
//     bookCardRead.classList.add('book-card-read');
    
//     bookList.appendChild(bookCard);
//     bookCard.appendChild(bookCardTitle);
//     bookCard.appendChild(bookCardAuthor);
//     bookCard.appendChild(bookCardPages);
//     bookCard.appendChild(bookCardRead);

//     let titleHeading = document.createElement('h3');
//     let authorHeading = document.createElement('h3');
//     let pagesHeading = document.createElement('h3');
//     let readHeading = document.createElement('h3');

//     let bookTitle = document.createElement('p');
//     let bookAuthor = document.createElement('p');
//     let bookPages = document.createElement('p');
//     let readBtn = document.createElement('button');

//     readBtn.classList.add('read-button');

//     titleHeading.textContent = "Title: ";
//     authorHeading.textContent = "Author: ";
//     pagesHeading.textContent = "Pages: ";
//     readHeading.textContent = "Read: ";

//     bookTitle.textContent = newBook.title;
//     bookAuthor.textContent = newBook.author;
//     bookPages.textContent = newBook.pages;

//     bookCardTitle.appendChild(titleHeading);
//     bookCardTitle.appendChild(bookTitle);
//     bookCardAuthor.appendChild(authorHeading);
//     bookCardAuthor.appendChild(bookAuthor);
//     bookCardPages.appendChild(pagesHeading);
//     bookCardPages.appendChild(bookPages);
//     bookCardRead.appendChild(readHeading);
//     bookCardRead.appendChild(readBtn);

//     let bookCardDelete = document.createElement('div');
//     bookCardDelete.classList.add('book-card-delete');
//     bookCard.appendChild(bookCardDelete);

//     let deleteBookBtn = document.createElement('button');
//     deleteBookBtn.classList.add('delete-button');
//     deleteBookBtn.textContent = "Delete Book";
//     bookCardDelete.appendChild(deleteBookBtn);

//     // Find the index for the book

//     let bookIndex = 0;

//     for (let i = 0; i < library.length; i++){
//         let currentBook = library[i];
//         if (currentBook === newBook){
//             bookIndex = i;
//         }
//     }

//     bookCard.setAttribute('data-index', bookIndex);
//     bookCard.setAttribute('data-title', newBook.title);

//     deleteBookBtn.addEventListener('click', () => {
//         deleteBook(bookCard.getAttribute('data-index'));
//     })

//     readBtn.addEventListener('click', () => {
//         newBook.toggleReadStatus();
//         if (newBook.read === true){
//             readBtn.classList.add('is-read');
//         }
//         else {
//             readBtn.classList.remove('is-read');
//         }
//     })
// };

// function showBooks() {
//     for (let i = 0; i < library.length; i++){
//         addNewBook(library[i]);
//     }
// };

function deleteBook (bookIndex) {
    library.splice(bookIndex, 1);
    // let bookToDelete = document.querySelector(`[data-index="${bookIndex}"]`);
    // bookToDelete.remove();
    // let books = document.querySelectorAll('.book-card');
    // books.forEach((book, index) => {
    //     book.setAttribute('data-index', index);
    // });
    displayBooks();
    totalBooks.textContent = library.length;
};

const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', 310, false);
const bookTwo = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);
const bookThree = new Book('To Kill A Mockingbird', 'Harper Lee', 281, false);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

displayBooks();

const openDialog = document.querySelector('.open-dialog');
const formDialog = document.querySelector('.form-dialog');
const closeDialog = document.querySelector('.close-dialog');
const submitBtn = document.querySelector('.submit');
const readBtns = document.querySelectorAll('.read-button');
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
    let newBook = new Book(newTitle, newAuthor, newPages, false);
    addBookToLibrary(newBook);
    // addNewBook(newBook);
    displayBooks();
    totalBooks.textContent = library.length;
});

Book.prototype.toggleReadStatus = function (){
    this.read = !this.read;
};