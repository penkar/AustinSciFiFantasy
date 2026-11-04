const searchBooks = (query: string) =>
  document.querySelectorAll('.book-item')?.forEach((book) => {
    const bookData = book.getAttribute('book-data');
    if (bookData && bookData.toLowerCase().includes(query.toLowerCase())) {
      book.classList.remove('hidden');
    } else {
      book.classList.add('hidden');
    }
  });

export const SearchInput = () => {
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Search books...');
  searchContainer.appendChild(input);
  input.addEventListener('input', (e) =>
    searchBooks((e.target as HTMLInputElement).value),
  );

  return searchContainer;
};
