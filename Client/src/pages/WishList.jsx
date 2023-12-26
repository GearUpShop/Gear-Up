import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`;

function WishList() {
  const { productId } = useParams();
  console.log('productId:', productId);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:5002/wish');
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

  const removeFromWishList = (productId) => {
    // Make a DELETE request to remove the product from the wishlist
    axios
      .delete(`http://localhost:5002/remove-from-wishlist/${productId}`)
      .then((response) => {
        console.log("Product removed from wishlist:", response.data);
        // Update the state to reflect the change in the wishlist
        setProduct((prevProducts) => prevProducts.filter((item) => item.id !== productId));
      })
      .catch((error) => {
        console.error("Error removing product from wishlist: ", error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
          {product.map((product, index) => (
            <section
              key={index}
              className="p-5 py-10 bg-purple-100 text-center transform duration-500 hover:-translate-y-2 cursor-pointer  "
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-5" />
              <div className="space-x-1 flex justify-center mt-10">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 mx-px fill-current text-${
                      i < product.rating ? 'orange-600' : 'gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                ))}
              </div>
              <h1 className="text-3xl my-5">{product.name}</h1>
              <p className="mb-5">{product.description}</p>
              <h2 className="font-semibold mb-5">${product.price}</h2>
              <button
                onClick={addToCart}
                className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              >
                Add To Cart
              </button>

              <button
                onClick={() => removeFromWishList(product.id)}
                className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 ml-2"
              >
                Remove from Wishlist
              </button>
            </section>
          ))}
        </section>
      </section>
    </div>







  );
}

export default WishList;
