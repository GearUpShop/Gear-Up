import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Swal from 'sweetalert2';

function ShoppingCart() {
  // const [cartItem, setCartItems] = useState([]);
  // const [itemQuantities, setItemQuantities] = useState({});
  const [flag, setFlag] = useState(false);

  const {
    total,
    setTotal,
    cartItems,
    setCartItems,
    itemQuantities,
    setItemQuantities,
  } = useCart();

  useEffect(() => {
    console.log(flag);
    fetchData();
    console.log(flag);
  }, [flag]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/Car");
      const defaultQuantities = {};
      response.data.forEach((item) => {
        defaultQuantities[item.id] = 1;
      });
      setItemQuantities(defaultQuantities);
      console.log(defaultQuantities);
      setCartItems(response.data);
      console.log(cartItems);
      console.log("Cart ", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateSubtotal = () => {
    const totall = cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.price) * itemQuantities[item.id],
        0
      )
      .toFixed(2);
      console.log(totall);

    return totall;
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    setTotal(subtotal)
    console.log(subtotal);
    return subtotal.toFixed(2);
  }

  //TODO


  const handleQuantityChange = (itemId, type) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (type === "increase") {
        updatedQuantities[itemId] += 1;
      } else if (type === "decrease" && updatedQuantities[itemId] > -1) {
        updatedQuantities[itemId] -= 1;
      }
      return updatedQuantities;
    });
  };
  axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
    "Token"
  )}`;

  const handleRemoveItem = async (productId) => {
     // Show a confirmation dialog
     const result = await Swal.fire({
      title: 'Remove Item',
      text: 'Are you sure you want to remove this item from your shopping cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    });
    if (result.isConfirmed) {
    try {
      console.log(productId);
      // Make an Axios delete request to remove the item with itemId
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== productId))

      await axios.delete(`http://localhost:5002/cart/${productId}`);
     
      // setItemQuantities({});
      setFlag(!flag);

      // Update the state to reflect the removed item
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        const indexToRemove = updatedCartItems.findIndex(
          (item) => item.id === productId
        );
        if (indexToRemove !== 1) {
          updatedCartItems.splice(indexToRemove, 1);
        }
        console.log(updatedCartItems);
        return updatedCartItems;
      });

      setItemQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      });

      console.log(flag);
      console.log(`Item with ID ${productId} removed successfully`);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }
  };

  return (
    <div>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4 mx-auto">
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 overflow-x-auto">
    <table className="w-full">
      {/* <thead>
        <tr>
          <th className="text-left font-semibold">Product</th>
          <th className="text-left font-semibold">Price</th>
          <th className="text-left font-semibold">Quantity</th>
          <th className="text-left font-semibold">Total</th>
          <th className="text-left font-semibold">Actions</th>
        </tr>
      </thead> */}
      <tbody>
        {cartItems?.map((item) => (
          <tr key={item.id}>
            <td className="py-2 md:py-4">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 mr-2 md:mr-4"
                  src={item.imageUrl}
                  alt="Product image"
                />
                <span className="font-semibold">{item.name}</span>
              </div>
            </td>
            <td className="py-2 md:py-4">${item.price}</td>
            <td className="py-2 md:py-4">
              <div className="flex items-center">
                <button
                  className="border rounded-md py-1 px-2 md:py-2 md:px-4 mr-1 md:mr-2"
                  onClick={() => handleQuantityChange(item.id, "decrease")}
                >
                  -
                </button>
                <span className="text-center w-8">
                  {itemQuantities[item.id]}
                </span>
                <button
                  className="border rounded-md py-1 px-2 md:py-2 md:px-4 ml-1 md:ml-2"
                  onClick={() => handleQuantityChange(item.id, "increase")}
                >
                  +
                </button>
              </div>
            </td>
            <td className="py-2 md:py-4">
              ${parseFloat(item.price * itemQuantities[item.id]).toFixed(2)}
            </td>
            <td className="py-2 md:py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                onClick={() => handleRemoveItem(item.productId)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${calculateTotal()}</span>
                </div>
                <Link to="/payment">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;




<>
  {/* component */}
  {/* Create By Joker Banny */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n'
    }}
  />
  <div className="h-screen bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019
              </h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">259.000 ₭</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019
              </h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">259.000 ₭</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub total */}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  </div>
</>




