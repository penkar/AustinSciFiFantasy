export const Header = () => {
  const header = document.createElement('header');
  header.id = 'header';

  const title = document.createElement('h1');
  title.innerText = 'Austin Fantasy & Science Fiction (Book) Club';
  header.appendChild(title);

  return header;
};
