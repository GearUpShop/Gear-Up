import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "Token"
)}`;

function WishList() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5002/wish");
        console.log("Fetched product:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = (productId) => {
    console.log(productId);
    axios
      .post(`http://localhost:5002/add-to-cart/${productId}`)
      .then((response) => {
        Swal.fire({
          title: "Shopping Cart",
          text: "Product added to Shopping Cart",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log("Product added to cart:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product to cart: ", error);
        console.log(productId);
      });
  };

  const removeFromWishList = (productId) => {
    axios
      .delete(`http://localhost:5002/product/${productId}`)
      .then((response) => {
        console.log("Product removed from wishlist:", response.data);
        setProduct((prevProducts) =>
          prevProducts.filter((item) => item.id !== productId)
        );
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
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10 items-start">
          {product.map((product, index) => (
            <section
              key={index}
              className=" bg-[#9fa2c3a9] text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg h-[30rem] shadow-xl"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg "
              />
              <div className="space-x-1 flex justify-center mt-10">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 mx-px fill-current text-${
                      i < product.rating ? "orange-600" : "gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                ))}
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-md my-2 mx-8">{product.name}</h4>
                <p className="mb-1">{product.description}</p>
                <h2 className="font-semibold mb-1">${product.price}</h2>
                <div className="flex flex-row justify-start items-end">
                  <button
                    className="p-2 px-6 text-white rounded-md text-start"
                  >
                    <Link
                      className="relative text-white hover:text-[#B31312]"
                      onClick={() => addToCart(product.id)}
                    >
                      <svg
                        className="h-7 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="absolute top-0 left-0 rounded-full bg-white text-white p-1 text-xs" />
                    </Link>
                  </button>

                  <button
                    onClick={() => removeFromWishList(product.productId)}
                    className="p-2 px-6 bg-[#28365f94] text-white rounded-md hover:bg-[#28365fc0] mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
}

export default WishList;
