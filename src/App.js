import { useState, useEffect } from 'react';

import { PAGES } from './constants';

import { Main, Landing, Login, Vote, Admin } from './pages';

import './styles/App.css'

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const App = () => {
  const [page, setPage] = useState('landing');

  const [landing, login, main, vote, admin] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(landing);
    } else {
      setPage(vote);
    }
  }, [landing, vote]);

  switch (page) {
    case landing:
      return <Landing setPage={setPage} />;
    case login:
      return <Login setPage={setPage} />;
    case main:
      return <Main setPage={setPage} />;
    case vote:
      return <Vote setPage={setPage} />;
    case admin:
      return <Admin setPage={setPage} />;
    default:
      throw new Error('SWITCH CASE WENT WRONG');
  }
};

export default App;
