import {
  ElementsConsumer,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import React from "react";
import CardSection from "./CardSection";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";
// import { useCart } from '../context/CartContext';
function CheckoutForm({ stripe, elements }) {
  // const { total } = useCart();
  const { total } = useCart();

  //   const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error.message);
      // Handle error appropriately
    } else {
      // Continue with the rest of your code

      // Handle amount
      if (paymentMethod) {
        const { id } = paymentMethod;

        // Rest of your code
        const response = await axios.post("http://localhost:5002/payment", {
          amount: 200,
          id,
        });
        if (response.data.success) {
          console.log(response.data);
          try {
            Swal.fire({
              title: "Payment",
              text: "Payment successfull",
              icon: "success",
              confirmButtonText: "Got it!",
            });
            console.log("Payment successful");
            // Handle success appropriately
          } catch (error) {
            console.log(error);
            // Handle error appropriately
          }
        } else {
          console.log("Payment failed");
          // Handle failure appropriately
        }
      } else {
        console.log("Payment method is undefined");
        // Handle undefined paymentMethod
      }
    }
  };
  return (
    <div className="border-b border-gray-900/30 pb-12 max-w-md bg-blue-200/30 ">
      <div className="border-b border-gray-900/30 pb-12">
        {/* <h3>{cartItems}</h3> */}

        <h2>{total}$</h2>
        
        <h4 className="product-price">All products</h4>
      </div>
      <form onSubmit={handleSubmit} >
        <CardSection />
        <button className="btn-pay">Buy Now</button>
      </form>
    </div>
  );
  //   }
}
export default CheckoutForm;
