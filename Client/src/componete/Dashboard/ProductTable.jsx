import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set the number of items per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5002/getProductsWithImage');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async (productId) => {

    
    try {
      await axios.put(`http://localhost:5002/getProductsWithImage/${productId}`, /* Update data */);
      fetchData();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDelete = async (productId) => {
    // Show a confirmation dialog
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });
  if (result.isConfirmed) {
    try {
      await axios.delete(`http://localhost:5002/delete/${productId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  };

  // Calculate the indexes of the current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <a
        href="#"
        className={`flex items-center justify-center px-3 h-8 ${
          number === currentPage
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-500 bg-white hover:bg-gray-100'
        } border border-gray-300 dark:border-gray-700 rounded hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </a>
    </li>
  ));

  return (
    <div>
      <div className="text-gray-900  overflow-hidden">
        <div className="p-4 flex">
          <h1 className="text-3xl">Products</h1>
        </div>
        <div className="px-3 py-4 flex justify-center overflow-hidden">
          <table className="w-full text-md bg-white shadow-md rounded mb-4 overflow-hidden">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Product Name</th>
                <th className="text-left p-3 px-5">Price</th>
                <th className="text-left p-3 px-5">Category</th>
                <th />
              </tr>
              {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">
                      <input type="text" value={product.name} className="bg-transparent" readOnly />
                    </td>
                    <td className="p-3 px-5">
                      <input type="text" value={product.price} className="bg-transparent" readOnly />
                    </td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={product.category}
                        className="bg-transparent"
                        readOnly
                      />
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleSave(product._id)}
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(product._id)}
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 ${
                    currentPage === 1
                      ? 'text-gray-500 bg-white border border-gray-300 rounded-s-lg'
                      : 'text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </a>
              </li>
              {renderPageNumbers}
              <li>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 ${
                    currentPage === pageNumbers.length
                      ? 'text-gray-500 bg-white border border-gray-300 rounded-e-lg'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
