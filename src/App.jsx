import "./App.css";
import Calculator from "./components/Calculator";
import PriceList from "./components/PriceList";

function App() {
	return (
		<>
			<div className="justify-center items-center App">
				<h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-6xl dark:text-white text-center">
					Price Engine
				</h1>
				<div className="flex gap-40 items-start justify-self-center">
					<PriceList />
					<Calculator />
				</div>
			</div>
		</>
	);
}

export default App;
