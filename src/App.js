<<<<<<< HEAD
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am the shop</h1>;
};

const App = () => {
=======
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import { setCurrentUser } from './store/user/user.action';

import Checkout from './routes/checkout/checkout.component';

const App = () => {
  // COMMENTED OUT FOR REVERSING REDUX TO CONTEXT
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });

  //   return unsubscribe;
  // }, []);

>>>>>>> reversedReduxToContext
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
=======
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
>>>>>>> reversedReduxToContext
      </Route>
    </Routes>
  );
};

export default App;
