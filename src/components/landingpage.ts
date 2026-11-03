import { AddBooks } from './addBooks';
import { Header } from './header';
import { SearchInput } from './searchInput';
import { SocialMedia } from './socialMedia';

export const LandingPage = () => {
  const container = document.querySelector('body');
  if (!container) {
    return document.createElement('span');
  }

  container.appendChild(Header());
  container.appendChild(SearchInput());
  container.appendChild(AddBooks());
  container.appendChild(SocialMedia());

  return container;
};
