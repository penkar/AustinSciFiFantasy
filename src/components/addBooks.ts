import { booksList } from '../assets/books';

type SortKeyType = 'author' | 'date' | 'title';
const sortKeys: SortKeyType[] = ['date', 'title', 'author'];

const sortBooks = (
  container: HTMLElement,
  key: SortKeyType,
  ascending: boolean,
) => {
  const items = Array.from(
    container.querySelectorAll<HTMLElement>('.book-item'),
  );
  const valueOf = (el: HTMLElement) =>
    el.querySelector(`.book-${key}`)?.textContent ?? '';
  items.sort((a, b) => {
    const result =
      key === 'date'
        ? Number(valueOf(a)) - Number(valueOf(b))
        : valueOf(a).localeCompare(valueOf(b));
    return ascending ? result : -result;
  });
  items.forEach((item) => container.appendChild(item));
};

export const AddBooks = () => {
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  const sortBar = document.createElement('div');
  sortBar.classList.add('sort-buttons');
  let activeKey: SortKeyType | null = null;
  let ascending = true;
  sortKeys.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = `Sort by ${key}`;
    button.addEventListener('click', () => {
      ascending = activeKey === key ? !ascending : true;
      activeKey = key;
      sortBar.querySelectorAll('button').forEach((b, i) => {
        b.textContent = `Sort by ${sortKeys[i]}`;
      });
      button.textContent += ascending ? ' ▲' : ' ▼';
      sortBooks(booksContainer, key, ascending);
    });
    sortBar.appendChild(button);
  });
  booksContainer.appendChild(sortBar);

  booksList.forEach(
    ({ title, firstName, lastName, middleName, date, number }) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book-item');
      bookElement.setAttribute(
        'book-data',
        `${firstName} ${middleName ? middleName + ' ' : ''}${lastName} - ${title} - ${date} - ${number}`,
      );

      const numberEle = document.createElement('div');
      numberEle.classList.add('book-date');
      numberEle.textContent = `${number}`;
      bookElement.appendChild(numberEle);

      const titleEle = document.createElement('div');
      titleEle.classList.add('book-title');
      titleEle.textContent = `${title}`;
      bookElement.appendChild(titleEle);

      const authorEle = document.createElement('div');
      authorEle.classList.add('book-author');

      authorEle.textContent = `${lastName}, ${firstName} ${middleName ? middleName + ' ' : ''}`;
      bookElement.appendChild(authorEle);

      const dateEle = document.createElement('div');
      dateEle.classList.add('book-meetup-date');
      dateEle.textContent = `${date}`;
      bookElement.appendChild(dateEle);
      booksContainer.appendChild(bookElement);
    },
  );
  return booksContainer;
};
