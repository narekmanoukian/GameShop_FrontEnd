import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './Store/UserStore';
import GameStore from './Store/GameStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Context.Provider value={{
      user: new UserStore(),
      game: new GameStore()
   }}>
      <App />
   </Context.Provider>
   
);

