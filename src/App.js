/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Page from './core/Page';

function App() {
  return (
    <Router>
      <Page />
    </Router>
  );
}

export default App;
