import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { DetailsCard } from "../components/DetailsCard.jsx";
import React from "react";
import { useEffect, useState } from "react";

export const Home = () => {

	const apiUrl = "https://www.swapi.tech/api/"
  	const {store, dispatch} =useGlobalReducer()
	useEffect(() => {
		fetch(apiUrl + "people")
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: "setCharacters", payload: data.results });
				console.log(store.characters);
			})
			.catch((error) => console.error("Error fetching characters:", error));
		
		
	}, [dispatch]);


	return (
		<div className="container-fluid text-center mt-5">
			<div className="container">
				<div className="row">
					<h4>Characters</h4>
				</div>
				<div className="row" style={{ "overflowX": "scroll" }}>
					<div className="d-flex gap-3">

						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
						<DetailsCard title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." details={["Detail 1", "Detail 2", "Detail 3"]} />
					</div>
				</div>
			</div>
		</div>
	);
}; 