import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import './index.scss';
import { store, persistor } from './store/store';

//IMPORTED TO REVERSE REDUX WITH CONTEXT
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}> */}
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
