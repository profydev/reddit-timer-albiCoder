/* eslint-disable linebreak-style */
import React from 'react';
import {
  cleanup, render, screen, within,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

afterEach(cleanup);

const setup = (initialPath = '/') => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};
const cases = [['Button redirects', 'link', /show me the best time/i],
  ['Table image redirects', 'link', /table/i]];
describe('hero section', () => {
  test.each(cases)('%s to search page', (testTitle, elementRole, regex) => {
    setup();

    const searchLink = screen.getByRole(elementRole, { name: regex });
    userEvent.click(searchLink);

    expect(screen.getByRole('heading', { name: /search page/i })).toBeInTheDocument();
    // test ends to the line above
    // going back to the home page because unable to change history manually
    const homeLink = screen.getByRole('link', { name: /logo\.svg/i });
    userEvent.click(homeLink);
  });
});

describe('info section', () => {
  test('test if "https://profy.dev" can be accessed on about section', () => {
    setup();
    const article = screen.getByRole('article');
    expect(within(article).getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', 'https://profy.dev');
  });
  test('test if "https://profy.dev/employers" can be accessed on about section', () => {
    setup();

    expect(screen.getByRole('link', { name: /click here for more information./i })).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
