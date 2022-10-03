import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartDropdownItemStyle,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector.js';

// IMPORTED TO REVERSE REDUX TO CONTEXT
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  // COMMENTED OUT TO REVERSE REDUX TO CONTEXT
  // const cartItems = useSelector(selectCartItems);

  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartDropdownItemStyle>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartDropdownItemStyle>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
