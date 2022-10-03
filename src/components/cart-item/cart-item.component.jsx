import './cart-item.styles.jsx';

import './cart-item.styles.jsx';
import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  CartItemDetailsName,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer className='cart-item-container'>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <CartItemDetails className='item-details'>
        <CartItemDetailsName className='name'>{name}</CartItemDetailsName>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
