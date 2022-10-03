import './cart-icon.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCountStyle,
} from './cart-icon.styles.jsx';

// IMPORTED FOR REVERSING REDUX TO CONTEXT
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // COMMENTED OUT FOR REVERSING REDUX TO CONTEXT
  // const cartCount = useSelector(selectCartCount);
  // const isCartOpen = useSelector(selectIsCartOpen);
  // const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer
      onClick={toggleIsCartOpen}
      className='cart-icon-container'>
      <ShoppingIconStyle className='shopping-icon' />
      <ItemCountStyle>{cartCount}</ItemCountStyle>
    </CartIconContainer>
  );
};

export default CartIcon;
