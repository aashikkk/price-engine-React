import React, { useState } from "react";
import axios from "../axios";

const Calculator = () => {
	const [product, setProduct] = useState("Penguin-ears");
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(null);

	const handleCalculate = async () => {
		const response = await axios.get(`/prices/${product}/${quantity}`);
		setPrice(response.data);
	};

	return (
		<div className="mx-10 my-10">
			<h2 className="text-4xl mb-5 font-extrabold dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				Price Calculator
			</h2>

			<div className="">
				<label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white items-center">
					Product:
					<select
						value={product}
						className="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						onChange={(e) => setProduct(e.target.value)}>
						<option value="Penguin-ears">Penguin-ears</option>
						<option value="Horseshoe">Horseshoe</option>
					</select>
				</label>
				<br />
				<label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white items-center">
					Quantity:
					<input
						className="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						min="1"
					/>
				</label>
				<div className="flex justify-center">
					<button
						className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						onClick={handleCalculate}>
						Calculate Price
					</button>
				</div>
				{price !== null && (
					<div>
						<h3 className="text-center my-3 p-4 mb-4 text-md text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
							Total Price: {price.toFixed(2)}
						</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Calculator;
