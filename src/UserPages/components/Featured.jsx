import React from "react";

export default function Featured({ title = "Just Arrived" }) {
  // Sample new arrival products
  const newArrivals = [
    {
      id: 1,
      name: "Minimalist Coffee Table",
      description: "Contemporary design with walnut finish",
      price: "$349",
      image: "https://source.unsplash.com/400x300/?furniture,table,1"
    },
    {
      id: 2,
      name: "Scandinavian Bookshelf",
      description: "Open-concept shelving with oak finish",
      price: "$499",
      image: "https://source.unsplash.com/400x300/?furniture,bookshelf,2"
    },
    {
      id: 3,
      name: "Plush Area Rug",
      description: "Soft texture with geometric patterns",
      price: "$199",
      image: "https://source.unsplash.com/400x300/?furniture,rug,3"
    }
  ];

  return (
    <section id="products" className="p-10 md:p-20">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">The newest additions to our collection</p>
      </div>
      
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 m-2 rounded">
                New
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-lg">{product.price}</p>
                <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}