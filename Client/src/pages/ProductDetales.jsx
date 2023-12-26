
// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`;

function ProductDetails() {
  const { productId } = useParams();
  console.log('productId:', productId);
  const [product, setProduct] = useState([]);
  
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/det/${productId}`);
        console.log('Fetched product:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

const addToCart = () => {

  // Make a POST request to your shopping cart endpoint
  axios
    .post(`http://localhost:5002/add-to-cart/${productId}`)
    .then((response) => {
      Swal.fire({
        title: "Shopping Cart",
        text: "Product added to Shopping Cart",
        icon: "success",
        position: "top-end", // Try different positions
        showConfirmButton: false, // Hide the confirmation button
        timer: 2000,
      });
      console.log("Product added to cart:", response.data);
      
    })
    .catch((error) => {
      console.error("Error adding product to cart: ", error);
    });
};

  if (!product) {
    return <div>Loading...</div>;
  }


  const addWishList = () => {

   // Make a POST request to your WishList endpoint
    axios
      .post(`http://localhost:5002/add-to-wishlist/${productId}`)
      .then((response) => {
        Swal.fire({
          title: "Wishlist",
          text: "Product added to Wishlist",
          icon: "success",
          confirmButtonText: "Got it!",
        });
        console.log("Product added to WishList:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product WishList: ", error);
      });
  };
  
    if (!product) {
      return <div>Loading...</div>;
    }
  

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.images}
                alt={product.name}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={addToCart}
                  className="w-full bg-[#B31312] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                onClick={addWishList}
                  className="w-full bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">${product.price}</span>
              </div>
              {/* <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">{product.availability}</span>
              </div> */}


              <div className="flex justify-end gap-4">
  <div className="flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  </div>
  <span className="text-slate-400 font-medium">3.7 out of 5 stars</span>
</div>

            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;



