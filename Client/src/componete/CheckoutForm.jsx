import {
  ElementsConsumer,
  CardElement,
  useStripe,
  useElements,} from "@stripe/react-stripe-js";
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
   
      <>
  {/* component */}
  <div className="leading-loose flex flex-row justify-center">
    <form onSubmit={handleSubmit} className="max-w-2xl m-4 p-10 bg-[#6c6e8e] rounded shadow-2xl border-4 border-[#686892]">
      <p className=" font-medium mb-2 text-[20px] text-white text-center">Customer information</p>
      <hr className="mb-4"/>
      <div className="">
        <label className="block text-sm text-white mb-2" htmlFor="cus_name">
          Name
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-white mb-2" htmlFor="cus_email">
          Email
        </label>
        <input
          className="w-full px-5  py-4 text-gray-700 bg-gray-100 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label className=" block text-sm text-white mb-2" htmlFor="cus_email">
          Address
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Street"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label
          className="hidden text-sm block text-white"
          htmlFor="cus_email"
        >
          City
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="City"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 w-1/2 pr-1">
        <label
          className="hidden block text-sm text-white"
          htmlFor="cus_email"
        >
          Country
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded "
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Country"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label
          className="hidden block text-sm text-gray-600"
          htmlFor="cus_email"
        >
          Zip
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Zip"
          aria-label="Email"
        />
      </div>
      <p className="mt-8   text-white font-medium">Payment information</p>
      <div className="my-4">
       
        <CardSection />
      </div>
      <h1 className="text-xl text-gray-100">{total}$</h1>
      
      <div className="mt-4">
        <button
          className=" w-full bg-[#B31312] px-4 py-1 text-white font-light tracking-wider  rounded"
          type="submit"
        >
        Pay now
        </button>
      </div>
    </form>
  </div>
</>
  );
  //   }
}
export default CheckoutForm;







// import React, { useState } from "react";
// import {
//   ElementsConsumer,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useCart } from "../context/CartContext";
// import CardSection from "./CardSection";

// function CheckoutForm({ stripe, elements }) {
//   const { total } = useCart();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     country: "",
//     zip: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.log(error.message);
//       return;
//     }

//     if (paymentMethod) {
//       const { id } = paymentMethod;

//       const paymentResponse = await axios.post("http://localhost:2005/payment", {
//         amount: 200,
//         id,
//       });

//       if (paymentResponse.data.success) {
//         const userResponse = await axios.post("", formData);

//         if (userResponse.data.success) {
//           console.log("User data stored successfully:", userResponse.data);
//         } else {
//           console.log("Failed to store user data");
//         }

//         Swal.fire({
//           title: "Payment",
//           text: "Payment and user data stored successfully",
//           icon: "success",
//           confirmButtonText: "Got it!",
//         });
//       } else {
//         console.log("Payment failed");
//       }
//     } else {
//       console.log("Payment method is undefined");
//     }
//   };

//   return (
//     <div className="leading-loose">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl m-4 p-10 bg-blue-400 rounded shadow-xl"
//       >
//         <p className="text-gray-800 font-medium">Customer information</p>
//         <div className="">
//           <label className="block text-sm text-gray-00" htmlFor="cus_name">
//             Name
//           </label>
//           <input
//             className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
//             id="cus_name"
//             name="name"
//             type="text"
//             required=""
//             placeholder="Your Name"
//             aria-label="Name"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mt-2">
//           <label className="block text-sm text-gray-600" htmlFor="cus_email">
//             Email
//           </label>
//           <input
//             className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
//             id="cus_email"
//             name="email"
//             type="text"
//             required=""
//             placeholder="Your Email"
//             aria-label="Email"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mt-2">
//           <label
//             className="block text-sm text-gray-600"
//             htmlFor="cus_address"
//           >
//             Address
//           </label>
//           <input
//             className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
//             id="cus_address"
//             name="address"
//             type="text"
//             required=""
//             placeholder="Street"
//             aria-label="Address"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mt-2">
//           <label className="block text-sm text-gray-600" htmlFor="cus_city">
//             City
//           </label>
//           <input
//             className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
//             id="cus_city"
//             name="city"
//             type="text"
//             required=""
//             placeholder="City"
//             aria-label="City"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="inline-block mt-2 w-1/2 pr-1">
//           <label
//             className="block text-sm text-gray-600"
//             htmlFor="cus_country"
//           >
//             Country
//           </label>
//           <input
//             className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
//             id="cus_country"
//             name="country"
//             type="text"
//             required=""
//             placeholder="Country"
//             aria-label="Country"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
//           <label className="block text-sm text-gray-600" htmlFor="cus_zip">
//             Zip
//           </label>
//           <input
//             className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
//             id="cus_zip"
//             name="zip"
//             type="text"
//             required=""
//             placeholder="Zip"
//             aria-label="Zip"
//             onChange={handleInputChange}
//           />
//         </div>
//         <p className="mt-4 text-gray-800 font-medium">Payment information</p>
//         <div className="">
//           <label className="block text-sm text-gray-600" htmlFor="cus_card">
//             Card
//           </label>
//           <CardSection />
//         </div>
//         <h2>{total}$</h2>

//         <div className="mt-4">
//           <button
//             className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
//             type="submit"
//           >
//             Pay now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CheckoutForm;
