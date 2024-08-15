const library = [];

function Book (title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary (book){
    library.push(book);
};

function showBooks (){
    for (let i = 0; i < library.length; i++)
        {
            console.log(library[i].title);
            console.log(library[i].author);
            console.log(library[i].pages);
            console.log();
        }
};

const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const bookTwo = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const bookThree = new Book('To Kill A Mockingbird', 'Harper Lee', 281);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

console.log(showBooks());