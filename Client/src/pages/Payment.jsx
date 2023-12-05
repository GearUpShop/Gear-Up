import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import CheckoutForm from "../componete/CheckoutForm";
import { useCart } from '../context/CartContext';
const stripePromise = loadStripe('pk_test_51OJ9OfHaQ2tawrR9ybHnbL4Uw5AYVWlX38f20vngRYdIVKvgkzBopwCJq7jKvJvQb1VBuNCibGYeYtZKjxH73fKc00wiQzi5Wt');
const Payment = () => {
  
  const { total } = useCart();
  return (
    <div className="product">
    {/* <img
      src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
      alt="laptop"
      style={{ width: "100%", height: "auto" }}
    /> */}
    <div>


        <Elements stripe={stripePromise}>
        <ElementsConsumer>

      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements}  />
      )}
    </ElementsConsumer>
      </Elements>

    </div>
  </div>
  )
}

export default Payment