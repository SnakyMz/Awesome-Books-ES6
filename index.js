import BookList from "./modules/BookList.js";

const books = new BookList();

const list = document.querySelector('#list');
const listBtn = document.querySelector('#listBtn');
const addBook = document.querySelector('#addBook');
const addBookBtn = document.querySelector('#addBookBtn');
const contact = document.querySelector('#contact');
const contactBtn = document.querySelector('#contactBtn');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

listBtn.onclick = () => {
    list.style.display = 'flex';
    addBook.style.display = 'none';
    contact.style.display = 'none';
}

addBookBtn.onclick = () => {
    list.style.display = 'none';
    addBook.style.display = 'flex';
    contact.style.display = 'none';
}

contactBtn.onclick = () => {
    list.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'flex';
}

window.onload = () => {
    list.style.display = 'flex';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    books.display();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    books.add(title.value, author.value);
    form.reset();
});