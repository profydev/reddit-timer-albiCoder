/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Page from './core/Page';
import MyThemeProvider from './core/MyThemeProvider';

function App() {
  return (
    <Router>
      <MyThemeProvider>
        <Page />
      </MyThemeProvider>
    </Router>
  );
}

export default App;
