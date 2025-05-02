import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Create a basic cart context/hook
const CartContext = React.createContext();
const useCart = () => React.useContext(CartContext);

const Products = () => {
  const navigate = useNavigate();

  // State for products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For a real app, you would implement this properly with state management
  const { dispatch } = { dispatch: () => {} };

  // Fetch products from JSON Server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      // Get the current cart for user ID 1
      const response = await axios.get('http://localhost:3000/carts/1');
      const cart = response.data;

      // Check if the product is already in the cart
      const existingItemIndex = cart.items.findIndex(item => item.productId === product.id);

      if (existingItemIndex !== -1) {
        // If product already exists, increase quantity
        cart.items[existingItemIndex].quantity += 1;
      } else {
        // If product doesn't exist, add it to the cart
        cart.items.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }

      // Update the cart on the server
      await axios.put('http://localhost:3000/carts/1', cart);

      // Also dispatch to local state if needed
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      });

      // Show success message
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  // Get unique categories for the filter buttons
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-3">Our Collection</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Discover furniture that combines style, comfort, and quality for every room in your home</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Furniture Collection" 
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Browse Our Products
          </h2>
          <div className="w-32 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the perfect furniture pieces to transform your space into a stylish and comfortable home
          </p>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading products...</p>
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

        {!loading && !error && (
          <>
            {/* Category Filter */}
            <div className="mt-16 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Filter by Category</h3>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-3"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-8 py-3 rounded-full transition-all duration-300 font-medium text-base ${
                      activeCategory === category
                        ? "bg-indigo-600 text-white shadow-lg transform scale-105 hover:bg-indigo-700"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-2xl text-gray-600 font-medium">No products found in this category.</p>
                <p className="text-gray-500 mt-2">Please try another category or check back later.</p>
              </div>
            ) : (
              <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group flex flex-col h-[550px]"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={product.image || `https://source.unsplash.com/500x400/?furniture,${product.name}`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1.5 m-4 rounded-full text-sm font-medium shadow-md">
                        {product.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-medium line-clamp-2">{product.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="h-16 overflow-hidden mb-4">
                        <p className="text-gray-600 line-clamp-2">{product.description}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-indigo-600">
                            {product.price}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-indigo-600 text-white py-2.5 px-6 rounded-full hover:bg-indigo-700 transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            Add to Cart
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-2 h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 mt-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" fill="none" stroke="white" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-70"></div>
          <p className="text-xl mb-10 leading-relaxed">Visit our showroom or contact our customer service team for personalized assistance. We're here to help you find the perfect furniture for your home.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/contactus')}
              className="bg-white text-indigo-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigate('/aboutus')}
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Find Showroom
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );

};

export default Products;
