import React from "react";

export default function Hero({ title = "Best Sellers", subtitle = "Explore our most popular furniture pieces" }) {
  // Sample best seller products
  const bestSellers = [
    {
      id: 1,
      name: "Modern Leather Sofa",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1616627986315-e6bd1b0a4f85"
    },
    {
      id: 2,
      name: "Accent Armchair",
      price: "$599",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    }
  ];

  return (
    <section className="bg-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 m-2 rounded">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-2xl font-bold text-amber-600 mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}