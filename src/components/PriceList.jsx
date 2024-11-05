import React, { useEffect, useState } from "react";
import axios from "../axios";
const PriceList = () => {
	const [penguinPrices, setPenguinPrices] = useState([]);
	const [horseshoePrices, setHorseshoePrices] = useState([]);

	useEffect(() => {
		const fetchPrices = async () => {
			const penguinPricesData = [];
			const horseshoePricesData = [];

			for (let quantity = 1; quantity <= 50; quantity++) {
				const penguinResponse = await axios.get(
					`/prices/Penguin-ears/${quantity}`
				);
				penguinPricesData.push({ quantity, price: penguinResponse.data });

				const horseshoeResponse = await axios.get(
					`/prices/Horseshoe/${quantity}`
				);
				horseshoePricesData.push({ quantity, price: horseshoeResponse.data });
			}
			setHorseshoePrices(horseshoePricesData);
			setPenguinPrices(penguinPricesData);
		};

		fetchPrices();
	}, []);

	return (
		<div className="mx-10 my-10">
			<h2 className="text-4xl text-blue-600 font-extrabold dark:text-white">
				Price List for (1-50 Units)
			</h2>
			<div className="relative overflow-x-auto my-5 shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th
								scope="col"
								className="px-6 py-3">
								Quantity
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Penguin-ears Price
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Horseshoe Price
							</th>
						</tr>
					</thead>
					<tbody>
						{penguinPrices.map((penguin, index) => (
							<tr
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								key={index}>
								<td className="px-6 py-3">{penguin.quantity}</td>
								<td className="px-6 py-3">{penguin.price.toFixed(2)}</td>
								<td className="px-6 py-3">
									{horseshoePrices[index].price.toFixed(2)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PriceList;
