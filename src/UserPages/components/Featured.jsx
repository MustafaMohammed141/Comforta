import React from "react";
import { useNavigate } from "react-router-dom";

export default function Featured({ title = "Just Arrived" }) {
  const navigate = useNavigate();

  // Sample new arrival products
  const newArrivals = [
    {
      id: 1,
      name: "Minimalist Coffee Table",
      description: "Contemporary design with walnut finish",
      price: "$349",
      discount: "15% OFF",
      oldPrice: "$410",
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Scandinavian Bookshelf",
      description: "Open-concept shelving with oak finish",
      price: "$499",
      discount: "10% OFF",
      oldPrice: "$550",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Plush Area Rug",
      description: "Soft texture with geometric patterns",
      price: "$199",
      discount: "20% OFF",
      oldPrice: "$249",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Modern Desk Lamp",
      description: "Adjustable LED with minimalist design",
      price: "$89",
      discount: "25% OFF",
      oldPrice: "$119",
      image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">The newest additions to our collection, fresh off the design floor</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 m-3 rounded-full font-medium">
                  New
                </div>
                {product.discount && (
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white px-3 py-1 m-3 rounded-full font-medium">
                    {product.discount}
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => navigate('/shopping')}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg text-indigo-600">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                  )}
                </div>
                <button 
                  onClick={() => navigate('/cart')}
                  className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/shopping')}
            className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300 font-medium"
          >
            View All New Arrivals
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );

}
