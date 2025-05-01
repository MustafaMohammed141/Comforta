import React from "react";

export default function Featured() {
	return (
		<>


			<section id="products" className="p-10 md:p-20">
				<h3 className="text-2xl font-bold mb-8 text-center">
					Featured Products
				</h3>
				<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div
							key={item}
							className="bg-white rounded-xl shadow-md overflow-hidden"
						>
							<img
								src={`https://source.unsplash.com/400x300/?furniture,room,${item}`}
								alt="Furniture item"
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h4 className="font-semibold text-lg mb-2">
									Modern Sofa {item}
								</h4>
								<p className="text-sm text-gray-600">
									Comfortable and stylish design perfect for
									any living room.
								</p>
								<p className="mt-2 font-bold">$499</p>
							</div>
						</div>




					))}
				</div>
			</section>
		</>
	);
}
