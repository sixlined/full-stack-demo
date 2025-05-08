import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("increase");
	}, [count]);

	const MyVariable = ({ text }) => {
		const myVariable = "Hello World!";
		return (
			<div>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<p>my variable is {count}</p>
			</div>
		);
	};

	const Nav = ({ text }) => {
		const myVariable = "Hello World!";
		return (
			<li>
				<a href="#">Filthy Prank</a>
				<a href="#">Filthy Prank</a>
				<a href="#">Filthy Prank</a>
				<a href="#">Filthy Prank</a>
			</li>
		);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Nav />
				<MyVariable text="Good mythical morning" />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
