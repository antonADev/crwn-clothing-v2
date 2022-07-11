import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import {
  CartDropdownContainer,
  CartDropdownItemStyle,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
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
