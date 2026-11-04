import { booksList } from '../assets/books';

export const AddBooks = () => {
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  booksList.forEach(({ title, author, date, number }) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.setAttribute(
      'book-data',
      `${author} - ${title} - ${date} - ${number}`,
    );

    const numberEle = document.createElement('div');
    numberEle.classList.add('book-number');
    numberEle.textContent = `${number}`;
    bookElement.appendChild(numberEle);

    const titleEle = document.createElement('div');
    titleEle.classList.add('book-title');
    titleEle.textContent = `${title}`;
    bookElement.appendChild(titleEle);

    const authorEle = document.createElement('div');
    authorEle.classList.add('book-author');
    authorEle.textContent = `${author}`;
    bookElement.appendChild(authorEle);

    const dateEle = document.createElement('div');
    dateEle.classList.add('book-date');
    dateEle.textContent = `${date}`;
    bookElement.appendChild(dateEle);
    booksContainer.appendChild(bookElement);
  });
  return booksContainer;
};
