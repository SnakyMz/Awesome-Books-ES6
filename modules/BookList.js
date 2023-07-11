export default class BookList {
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
            <button type="button" class="removeBtn" id="${bookItem.id}">Remove</button>
            </div>
            `;
    });
    const removeBtn = document.querySelectorAll('.removeBtn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.removeBook(btn.id);
      });
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

  removeBook(value) {
    this.bookArray = this.bookArray.filter((book) => book.id !== value);
    localStorage.setItem('jsonLibrary', JSON.stringify(this.bookArray));
    this.display();
  }
}