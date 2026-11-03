export const SocialMedia = () => {
  const container = document.createElement('div');
  container.id = 'social';

  const connectWithus = document.createElement('div');
  connectWithus.innerText = 'Connect with us';

  const description = document.createElement('p');
  description.innerText =
    'Join the Austin Science Fiction and Fantasy Bookclub';

  container.appendChild(connectWithus);
  container.appendChild(description);

  const socialList = document.createElement('ul');
  const createLi = () => document.createElement('li');

  [
    { href: 'https://www.facebook.com/share/g/14sDGCdorsa/', text: 'Facebook' },
    {
      href: 'https://www.meetup.com/austin-fantasy-and-science-fiction-book-club/',
      text: 'Meetup',
    },
    {
      href: 'https://www.goodreads.com/group/show/191713-austin-fantasy-and-science-fiction-book-club',
      text: 'Goodreads',
    },
  ].map(({ href, text }) => {
    const li = createLi();
    li.innerHTML = `<a href="${href}" target="_blank">${text}</a>`;
    socialList.appendChild(li);
  });

  container.appendChild(socialList);

  return container;
};
