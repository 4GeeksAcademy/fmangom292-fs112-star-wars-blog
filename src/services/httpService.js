import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const { store, dispatch } = useGlobalReducer()

export async function fetchPeople() {
        try {
            await fetch(apiUrl + "people")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "setPeople", payload: data.results });
                return data.results;
                //console.log(data);
            })
            .catch((error) => console.error("Error fetching people:", error));
        } catch (error) {
            console.error("Error in fetchData:", error);
        }
    }

    export async function fetchPlanets() {
        try {
            await fetch(apiUrl + "planets")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "setPlanets", payload: data.results });
                return data.results;
                //console.log(data);
            })
            .catch((error) => console.error("Error fetching planets:", error));
        } catch (error) {
            console.error("Error in fetchData:", error);
        }
    }

    export async function fetchVehicles() {
        try {
            await fetch(apiUrl + "vehicles")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "setVehicles", payload: data.results });
                return data.results;
                //console.log(data);
            })
            .catch((error) => console.error("Error fetching vehicles:", error));
        } catch (error) {
            console.error("Error in fetchData:", error);
        }
    }
