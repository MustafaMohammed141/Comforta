import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import axios from "axios";

const ProductsDB = ({ products }) => {
  const navigate = useNavigate();

  const handleAdd = async () => {
    const newProduct = {
      title: "New Product",
      brand: "",
      category: "",
      short_description: "",
      price: "0.00",
      description: "",
      img: "https://via.placeholder.com/400",
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_DB}/products`, newProduct);
      navigate(`/admindb/ManageProducts/${res.data.id}`);
    } catch (e) {
      console.error("Failed to add product:", e);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/admindb">
        <Button color="indigo" variant="gradient" className="m-1 text-xl">
          Back
        </Button>
      </Link>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Product List</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleAdd}>
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.title}</td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4 space-x-2">
                  <Link to={`../ManageProducts/${product.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Manage Product
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsDB;
