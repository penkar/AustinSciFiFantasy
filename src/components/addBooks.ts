import { booksList } from '../assets/books';

export const AddBooks = () => {
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  booksList.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.setAttribute(
      'book-data',
      `${book.author} - ${book.title} - ${book.date} - ${book.number}`,
    );

    const number = document.createElement('div');
    number.classList.add('book-number');
    number.textContent = `${book.number}`;
    bookElement.appendChild(number);

    const title = document.createElement('div');
    title.classList.add('book-title');
    title.textContent = book.title;
    bookElement.appendChild(title);

    const author = document.createElement('div');
    author.classList.add('book-author');
    author.textContent = `${book.author}`;
    bookElement.appendChild(author);

    const date = document.createElement('div');
    date.classList.add('book-date');
    date.textContent = `${book.date}`;
    bookElement.appendChild(date);
    booksContainer.appendChild(bookElement);
  });
  return booksContainer;
};
