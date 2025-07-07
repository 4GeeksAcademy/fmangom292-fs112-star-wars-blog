import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { useEffect, useState } from "react";
import { CardGallery } from "../components/CardGallery.jsx";

export const Home = () => {

	const apiUrl = "https://www.swapi.tech/api/"
	const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	
	async function fetchCharacters() {
		try {
			await fetch(apiUrl + "people")
			.then((response) => response.json())
			.then((data) => {
				setCharacters(data.results);
				dispatch({ type: "setCharacters", payload: data.results });
				//console.log(data);
			})
			.catch((error) => console.error("Error fetching characters:", error));
		} catch (error) {
			console.error("Error in fetchData:", error);
		}
	}

	async function fetchPlanets() {
		try {
			await fetch(apiUrl + "planets")
			.then((response) => response.json())
			.then((data) => {
				setPlanets(data.results);
				dispatch({ type: "setPlanets", payload: data.results });
				//console.log(data);
			})
			.catch((error) => console.error("Error fetching planets:", error));
		} catch (error) {
			console.error("Error in fetchData:", error);
		}
	}

	async function fetchVehicles() {
		try {
			await fetch(apiUrl + "vehicles")
			.then((response) => response.json())
			.then((data) => {
				setVehicles(data.results);
				dispatch({ type: "setVehicles", payload: data.results });
				//console.log(data);
			})
			.catch((error) => console.error("Error fetching vehicles:", error));
		} catch (error) {
			console.error("Error in fetchData:", error);
		}
	}


	useEffect(() => {
		
		fetchCharacters();
		fetchPlanets()
		fetchVehicles();

	}, []);


	return (
		<>
			<CardGallery cards={characters} title={"Characters"}></CardGallery>
			<CardGallery cards={planets} title={"Planets"}></CardGallery>
			<CardGallery cards={vehicles} title={"Vehicles"}></CardGallery>
		</>
	);
}; 