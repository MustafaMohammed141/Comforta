import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ManageProducts = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);

	const VITE_DB = import.meta.env.VITE_DB;

	const getProduct = async () => {
		try {
			const res = await axios.get(`${VITE_DB}/products/${id}`);
			setProduct(res.data);
			setIsLoading(false);
		} catch (e) {
			console.error("Error fetching product:", e);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getProduct();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	const handleSave = async () => {
		try {
			await axios.put(`${VITE_DB}/products/${id}`, product);
			alert("Product updated successfully.");
			setIsEditing(false);
		} catch (e) {
			console.error("Failed to update product:", e);
		}
	};

	const handleDelete = async () => {
		if (confirm("Are you sure you want to delete this product?")) {
			try {
				await axios.delete(`${VITE_DB}/products/${id}`);
				alert("Product deleted.");
				navigate("/admindb/Products");
			} catch (e) {
				console.error("Failed to delete product:", e);
			}
		}
	};

	if (isLoading) return <div className="p-8 text-center">Loading product...</div>;
	if (!product) return <div className="p-8 text-center">Product not found.</div>;

	return (
		<div className="p-8 max-w-3xl mx-auto">
			<Link
				to="/admindb/Products"
				className="inline-block mb-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
			>
				Back to Products
			</Link>

			<h2 className="text-3xl font-bold mb-6">
				{isEditing ? (
					<input
						name="title"
						value={product.title}
						onChange={handleChange}
						className="text-3xl font-bold w-full"
					/>
				) : (
					product.title
				)}
			</h2>

			<img
				src={product.img}
				alt={product.title}
				className="w-full h-auto object-cover rounded mb-6 shadow"
			/>

			<div className="space-y-3 text-gray-700">
				{["brand", "category", "short_description", "price", "description"].map((field) => (
					<p key={field}>
						<strong>{field.replace("_", " ")}:</strong>{" "}
						{isEditing ? (
							<input
								name={field}
								value={product[field]}
								onChange={handleChange}
								className="border px-2 py-1 w-full"
							/>
						) : (
							product[field]
						)}
					</p>
				))}
			</div>

			<div className="flex gap-4 mt-6">
				{isEditing ? (
					<button
						onClick={handleSave}
						className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
					>
						Save
					</button>
				) : (
					<button
						onClick={() => setIsEditing(true)}
						className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
					>
						Edit
					</button>
				)}

				<button
					onClick={handleDelete}
					className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ManageProducts;
