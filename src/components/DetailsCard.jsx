import { NavLink } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const DetailsCard = ({id, name, text, details, destination}) => {
    const { store, dispatch } = useGlobalReducer()

    function addToFavorites() {
        console.log("Adding to favorites:", name, "with ID:", id, "and destination:", destination);
        let favorites = store.favorites || [];

        console.log("Current favorites:", favorites);
        
        const isFavorite = favorites.some(fav => fav.name === name);
        if (isFavorite) {
            console.log("Item is already in favorites:", name);
            return; // Exit if already a favorite
        }

        favorites.push({
            name: name,
            url: "/details/" + destination + "/" + id,
        });
        dispatch({
            type: "setFavorites",
            payload: favorites
        });

        //console.log("Current favorites:", store.favorites);
        
    }

    return (
        <div className="card" style={{"minWidth": "18rem"}}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h3>{name}</h3>
                    <p className="text-start">{text}</p>
                    <ul className="list-group list-group-flush " style={{"textDecoration": "none"}}>
                        {details.map((detail, index) => (
                            <li key={index} className="list-group-item text-start">{detail}</li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <NavLink to={`/details/${destination}/${id}`} className="btn btn-primary mt-3">
                            Go details
                        </NavLink>
                        <button className="btn btn-secondary mt-3" onClick={() => addToFavorites()}>
                            <i className="fa fa-heart" aria-hidden="true"></i> 
                        </button>
                    </div>
                </div>
        </div>
    )
}