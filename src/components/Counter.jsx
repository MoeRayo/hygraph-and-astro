import { useState } from "react";
const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="text-center">
			<p className="text-xl">You clicked {count} times</p>
			<button
				className="bg-indigo-900 border border-solid border-indigo-900 text-white px-4 py-2 mb-5 mt-3 font-bold rounded-md"
				onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
};
export default Counter;
