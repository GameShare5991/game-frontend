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
        const queryParams = new URLSearchParams(window.location.search);
        const userName = queryParams.get('name');
        console.log(userName);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                for (let i = 1; i < json.length; i++) {
                    console.log(json[i].title, json[i].id);

                    // const submitURL = "http://localhost:3005/addRental/?gameId=" + json[i].id + "&rentalUser=" + userName;
                    const submitURL = "http://localhost:3005/addRental";
                    console.log(submitURL)
                    const reviewURL = "http://localhost:3007/reviews/" + json[i].id;
                    const salesURL = "http://localhost:4005/sales/create";
                    const review = await fetch(reviewURL);
                    const reviewJSON = await review.json();
                    render(
                        <div>
                            <img src={json[i].img} width="200" height="300" />
                            <h1>{json[i].title}</h1>
                            <h2>{json[i].console.join(' ')}</h2>
                            <p>{json[i].released}</p>
                            <p>{json[i].rating}</p>
                            <p>{json[i].descrip}</p>
                            <p>User Average Review Score: {reviewJSON.totalStars}/5 stars</p>
                            <form action={submitURL} method="get">
                                <input type="hidden" name="gameId" value={json[i].id}></input>
                                <input type="hidden" name="rentalUser" value={userName}></input>
                                <button type="submit">Rent Here</button>
                            </form>
                            <form action={salesURL} method="post">
                                <input type="hidden" name="game" value={json[i].title}></input>
                                <input type="hidden" name="user" value={userName}></input>
                                <input type="hidden" name="soldFor" value={59.99}></input>
                                <input type="hidden" name="img" value={json[i].img}></input>
                                <button type="submit">Buy Here</button>
                            </form>
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
