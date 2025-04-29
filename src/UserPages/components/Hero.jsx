import React from "react";

export default function Hero() {
	return (
		<>
			<section className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20 bg-indigo-100">
				<div className="md:w-1/2">
					<h2 className="text-4xl font-bold mb-4">
						Stylish Furniture for Your Dream Home
					</h2>
					<p className="mb-6 text-lg">
						Explore our curated collection of high-quality furniture
						built to last and styled for modern living.
					</p>
					<a
						href="#products"
						className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
					>
						Shop Now
					</a>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1616627986315-e6bd1b0a4f85"
						alt="Furniture"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</section>
		</>
	);
}
