import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import App from './App';
import server from './services/server';
import { setSkillsData } from './features/skills/skillsSlice';

server();

const getSkillsFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem('Skills');
    if (persistedState) { return JSON.parse(persistedState); }
  } catch (e) {
    console.log(e);
  }
  return null;
};

const skills = getSkillsFromLocalStorage();
if (skills) {
  store.dispatch(setSkillsData(skills));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
