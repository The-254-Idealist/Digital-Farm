import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartRedux";
import '../App.css'
import { buyerRequest } from "../requestMethods";
import {AiOutlineDelete } from "react-icons/ai"
import StripeCheckout from "react-stripe-checkout";
import { Link, useNavigate } from "react-router-dom";



const KEY = process.env.REACT_APP_STRIPE;


const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState('');
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    dispatch(getTotals());

    const makeRequest = async () => {
        try {
          const res = await buyerRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount:cart.cartTotalAmount*100 ,
          });
          navigate("/success", { 
                    state:{
                      stripeData: res.data,
                      products: cart,
                     } 
                  }) 
        } catch {}
      };
      stripeToken && makeRequest();
  }, [cart, dispatch , navigate, stripeToken]);



  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.img} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                      <AiOutlineDelete /> 
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">Kes{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    Kes{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">Kes{cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <StripeCheckout
              name="Agri Tech"
              image="https://bit.ly/3cj9V2v"
              billingAddress
              shippingAddress
              description={`Your total is Ksh${cart.cartTotalAmount}`}
              amount={cart.cartTotalAmount}
              token={onToken}
              stripeKey={KEY}
            >
              <button > Pay with Stripe</button>
            </StripeCheckout>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
