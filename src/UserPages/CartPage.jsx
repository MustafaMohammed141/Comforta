import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer';

const CartPage = () => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/carts/1');
        setCart(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart. Please try again later.');
        setLoading(false);
        console.error('Error fetching cart:', err);
      }
    };

    fetchCart();
  }, []);

  // Calculate total price whenever cart changes
  useEffect(() => {
    if (cart.items && cart.items.length > 0) {
      const total = cart.items.reduce((sum, item) => {
        // Remove $ and commas from price string and convert to number
        const priceValue = parseFloat(item.price.replace(/[$,]/g, ''));
        return sum + (priceValue * item.quantity);
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  // Update item quantity
  const updateQuantity = async (itemIndex, newQuantity) => {
    try {
      if (newQuantity < 1) return;

      const updatedCart = { ...cart };
      updatedCart.items[itemIndex].quantity = newQuantity;

      await axios.put('http://localhost:3000/carts/1', updatedCart);
      setCart(updatedCart);
    } catch (err) {
      console.error('Error updating quantity:', err);
      alert('Failed to update quantity. Please try again.');
    }
  };

  // Remove item from cart
  const removeItem = async (itemIndex) => {
    try {
      const updatedCart = { ...cart };
      updatedCart.items.splice(itemIndex, 1);

      await axios.put('http://localhost:3000/carts/1', updatedCart);
      setCart(updatedCart);
    } catch (err) {
      console.error('Error removing item:', err);
      alert('Failed to remove item. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Shopping Cart</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading your cart...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        )}

        {!loading && !error && cart.items.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-2xl text-gray-600 font-medium">Your cart is empty</p>
            <p className="text-gray-500 mt-2 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <a href="/shopping" className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 inline-block">
              Browse Products
            </a>
          </div>
        )}

        {!loading && !error && cart.items.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.items.map((item, index) => {
                    // Remove $ and commas from price string and convert to number
                    const priceValue = parseFloat(item.price.replace(/[$,]/g, ''));
                    const itemTotal = priceValue * item.quantity;

                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0">
                              <img className="h-16 w-16 rounded-md object-cover" src={item.image} alt={item.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500">ID: {item.productId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button 
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-1 hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-1 hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">${itemTotal.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button 
                            onClick={() => removeItem(index)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium text-gray-900">
                  Total: <span className="text-xl font-bold text-indigo-600">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex space-x-4">
                  <a href="/shopping" className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-50 transition-all duration-300">
                    Continue Shopping
                  </a>
                  <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-all duration-300">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
