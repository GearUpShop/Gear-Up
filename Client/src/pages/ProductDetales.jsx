
// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
      .post(`http://localhost:5002/add-to-cart/${productId}`)
      .then((response) => {
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
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                onClick={addWishList}
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
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
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">{product.availability}</span>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;



