/* eslint-disable linebreak-style */
import React from 'react';
import {
  render, screen,
  waitFor,
  // within,
} from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';
import mockResponse from './__mocks__/subreddit-reactjs-response.json';

fetchMock.enableMocks();

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

// const cases = [['Button redirects', 'link', /show me the best time/i],
//   ['Table image redirects', 'link', /table/i]];
// describe('hero section', () => {
//   test.each(cases)('%s to search page', (testTitle, elementRole, regex) => {
//     setup();
//     screen.debug();
//     const searchLink = screen.getByRole(elementRole, { name: regex });
//     userEvent.click(searchLink);

//     expect(screen.getByRole('heading',
// { name: /find the best time for a subreddit/i })).toBeInTheDocument();
//     // test ends to the line above
//     // going back to the home page because unable to change history manually
//     const homeLink = screen.getByRole('link', { name: /logo\.svg/i });
//     userEvent.click(homeLink);
//   });
// });

// describe('info section', () => {
//   test('test if "https://profy.dev" can be accessed on about section', () => {
//     setup();
//     const article = screen.getByRole('article');
//     expect(within(article).getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', 'https://profy.dev');
//   });
//   test('test if "https://profy.dev/employers" can be accessed on about section', () => {
//     setup();

//     expect(screen.getByRole('link', { name: /click here for more information./i })).toHaveAttribute('href', 'https://profy.dev/employers');
//   });
// });

// describe('search page', () => {
//   test('Search subreddit reactjs and display the posts of monday 2pm', async () => {
//     fetch.once(JSON.stringify(mockResponse));
//     fetch.mockReject(() => Promise.reject("API is down"));
//     setup();
//     // go to the search page
//     const searchPageLink = screen.getByRole('link', { name: /search/i });
//     userEvent.click(searchPageLink);

//     // get input field
//     const inputField = screen.getByLabelText('r /');
//     userEvent.type(inputField, 'reactjs');

//     const submitButton = screen.getByRole('button', { name: /search/i });
//     userEvent.click(submitButton);

//     expect(screen.getByRole('progressbar')).toBeInTheDocument();

//     // wait for appearance inside an assertion
//     // await waitFor(() => {
//     //   const tab = screen.getByText('12:00am', {}, { timeout: 5000 });
//     //   screen.debug(tab);
//     // });
//     // expect(await s
//     // creen.findByText('12:00am', {}, { interval: 5000, timeout: 5000 })).toBeVisible();
//     const al = await screen.findByText('Sunday');
//     screen.debug(al);
//     expect(al).toBeInTheDocument();
//     expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json?t=year&limit=100');
//   });
// });
describe('Subreddit form', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('loads posts and renders them on the page', async () => {
    fetch.Once(JSON.stringify(mockResponse));
    setup();
    const searchPageLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchPageLink);
    const subredditInput = screen.getByLabelText('r /');
    userEvent.type(subredditInput, 'reactjs');
    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    expect(await screen.findByText(/12:00am/i, {}, { timeout: 4000 })).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json');
  });
});
