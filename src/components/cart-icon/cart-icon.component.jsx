import './cart-icon.styles.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCountStyle,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

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
