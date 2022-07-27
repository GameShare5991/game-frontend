// Importing modules
import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import "./App.css";

function App() {

	useEffect(() => {
		//make sure the container is running in port 5000
		//or edit the url here and in package.json
		//CORS must be working (should be in the api)
		const url = "http://localhost:5000/games"
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();

				for (let i = 1; i < json.length; i++) {
					var jsonObject = json[i].replaceAll(`'`, `"`);
					console.log(jsonObject);
					var parsedJson = JSON.parse(jsonObject);
					console.log(parsedJson.id);
					render (
						<div>
							<img src={parsedJson.img} width="200" height="300" />
							<h1>{parsedJson.title}</h1>
							<h2>{parsedJson.console.join(' ')}</h2>
							<p>{parsedJson.released}</p>
							<p>{parsedJson.rating}</p>
							<p>{parsedJson.descrip}</p>

						</div>
						
					)
				}
				
				
				
				} catch (error) {
				console.log("error", error);
				}
							
		};
		fetchData();
	}, []);

	

	return (
		<div className="App">
			<header className="App-header">
				
				{/* Calling a data from setdata for showing */}
				

			</header>
		</div>
	);
}

export default App;
