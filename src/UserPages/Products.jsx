import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Create a basic cart context/hook
const CartContext = React.createContext();
const useCart = () => React.useContext(CartContext);

const products = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    description:
      "Elegant and comfortable leather sofa perfect for any living room",
    price: "$1,299",
    category: "Living Room",
    image: "/images/leather-sofa.jpg", // Update with your local image path
  },
  {
    id: 2,
    name: "Queen Platform Bed",
    description: "Minimalist platform bed with built-in storage",
    price: "$899",
    category: "Bedroom",
    image: "/images/platform-bed.jpg", // Update with your local image path
  },
  {
    id: 3,
    name: "Dining Table Set",
    description: "Contemporary 6-seater dining set with oak finish",
    price: "$1,499",
    category: "Dining Room",
    image: "/images/dining-set.jpg", // Update with your local image path
  },
  {
    id: 4,
    name: "Accent Armchair",
    description: "Stylish velvet armchair with gold-finished legs",
    price: "$599",
    category: "Living Room",
    image: "/images/armchair.jpg", // Update with your local image path
  },
  {
    id: 5,
    name: "Storage Ottoman",
    description: "Multifunctional ottoman with hidden storage space",
    price: "$299",
    category: "Living Room",
    image: "/images/ottoman.jpg", // Update with your local image path
  },
  {
    id: 6,
    name: "Dresser with Mirror",
    description: "Classic wooden dresser with attached mirror",
    price: "$799",
    category: "Bedroom",
    image: "/images/dresser.jpg", // Update with your local image path
  },
  {
    id: 7,
    name: "L-Shaped Sectional Sofa",
    description: "Spacious sectional sofa perfect for large family rooms",
    price: "$1,899",
    category: "Living Room",
    image: "/images/sectional-sofa.jpg", // Update with your local image path
  },
  {
    id: 8,
    name: "Coffee Table",
    description: "Marble-top coffee table with black metal frame",
    price: "$449",
    category: "Living Room",
    image: "/images/coffee-table.jpg", // Update with your local image path
  },
  {
    id: 9,
    name: "Bunk Bed",
    description: "Space-saving twin bunk bed with ladder and guardrails",
    price: "$799",
    category: "Bedroom",
    image: "/images/bunk-bed.jpg", // Update with your local image path
  },
  {
    id: 10,
    name: "Bar Stools (Set of 2)",
    description: "Industrial style bar stools with adjustable height",
    price: "$349",
    category: "Dining Room",
    image: "/images/bar-stools.jpg", // Update with your local image path
  },
  {
    id: 11,
    name: "Bookshelf",
    description: "5-tier bookshelf with open design and metal frame",
    price: "$299",
    category: "Home Office",
    image: "/images/bookshelf.jpg", // Update with your local image path
  },
  {
    id: 12,
    name: "TV Stand",
    description: "Entertainment center with cable management and storage",
    price: "$399",
    category: "Living Room",
    image: "/images/tv-stand.jpg", // Update with your local image path
  },
  {
    id: 13,
    name: "Office Desk",
    description: "Modern workstation with drawers and keyboard tray",
    price: "$549",
    category: "Home Office",
    image: "/images/office-desk.jpg", // Update with your local image path
  },
  {
    id: 14,
    name: "King Size Bed Frame",
    description: "Luxurious upholstered bed frame with tufted headboard",
    price: "$999",
    category: "Bedroom",
    image: "/images/king-bed.jpg", // Update with your local image path
  },
  {
    id: 15,
    name: "Recliner Chair",
    description: "Comfortable leather recliner with multiple positions",
    price: "$699",
    category: "Living Room",
    image: "/images/recliner.jpg", // Update with your local image path
  },
];

const Products = () => {
  // For a real app, you would implement this properly with state management
  const { dispatch } = { dispatch: () => {} };

  const addToCart = (product) => {
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
    // You could also add a toast/notification here to show the item was added
    alert(`${product.name} added to cart!`);
  };

  // Get unique categories for the filter buttons
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Collection
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover furniture that combines style, comfort, and quality
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 font-semibold">
                  {product.category}
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors duration-200 flex items-center"
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
