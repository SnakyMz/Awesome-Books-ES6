const list = document.querySelector('#list');
const listBtn = document.querySelector('#listBtn');
const addBook = document.querySelector('#addBook');
const addBookBtn = document.querySelector('#addBookBtn');
const contact = document.querySelector('#contact');
const contactBtn = document.querySelector('#contactBtn');

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
}