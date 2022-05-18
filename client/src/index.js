import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SaleStore from './store/saleStore';
import TourStore from './store/tourStore';
import UserStore from './store/userStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      tour: new TourStore(),
      sale: new SaleStore()
    }}>
    <App />
  </Context.Provider>,
);

