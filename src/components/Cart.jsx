import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item) => (
        <div key={item.id} >
          <span>{item.name} - {item.price}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))} >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
