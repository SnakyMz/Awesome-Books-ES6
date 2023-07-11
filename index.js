class BookList {
    constructor() {
        this.bookArray = JSON.parse(localStorage.getItem('jsonLibrary')) || [];
    }

    display() {
        const library = document.querySelector('#library');
        library.innerHTML = '';
        this.bookArray.forEach((bookItem) => {
            library.innerHTML += `
            <div class="book">
            <div class="bookDetail">
            <p>"${bookItem.title}"</p>
            <p>by</p>
            <p>${bookItem.author}</p>
            </div>
            <button type="button" class="removeBtn" onclick='books.remove("${bookItem.id}")'>Remove</button>
            </div>
            `;
        });
    }

    add(title, author) {
        const bookObject = {};
        bookObject.title = title;
        bookObject.author = author;
        bookObject.id = (title + author);
        this.bookArray.push(bookObject);
        localStorage.setItem('jsonLibrary', JSON.stringify(this.bookArray));
        this.display();
    }

    remove(value) {
        this.bookArray = this.bookArray.filter((book) => book.id !== value);
        localStorage.setItem('jsonLibrary', JSON.stringify(this.bookArray));
        this.display();
    }
}

const list = document.querySelector('#list');
const listBtn = document.querySelector('#listBtn');
const addBook = document.querySelector('#addBook');
const addBookBtn = document.querySelector('#addBookBtn');
const contact = document.querySelector('#contact');
const contactBtn = document.querySelector('#contactBtn');
const form = document.querySelector('form');
const titleText = document.querySelector('#title');
const authorText = document.querySelector('#author');

listBtn.onclick = () => {
    list.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
}

addBookBtn.onclick = () => {
    list.style.display = 'none';
    addBook.style.display = 'block';
    contact.style.display = 'none';
}

contactBtn.onclick = () => {
    list.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'block';
}

window.onload = () => {
    list.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    books.display();
}

const books = new BookList();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    books.add(title.value, author.value);
    form.reset();
});