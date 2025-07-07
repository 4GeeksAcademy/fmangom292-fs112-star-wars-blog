import { Link } from "react-router-dom";
import starWarsImageUrl from "../assets/img/star-wars.webp";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	function deleteFromFavorites(name) {
		console.log("Deleting from favorites:", name);
		let favorites = store.favorites || [];
		favorites = favorites.filter(fav => fav.name !== name);
		dispatch({
			type: "setFavorites",
			payload: favorites
		});
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="star-wars-logo" src={starWarsImageUrl} alt="" srcSet="" />
					</span>
				</Link>
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge badge-light">{store.favorites?.length || 0}</span>
					</a>

				
					<ul className="dropdown-menu">
						{
							store.favorites?.length > 0 ? (
								store.favorites.map((favorite, index) => (
									<li key={index}>
										<Link className="dropdown-item" to={favorite.url}>
											{favorite.name}
										</Link>
										<button>
											<i className="fa fa-trash" aria-hidden="true" onClick={() => deleteFromFavorites(favorite.name)}></i>
										</button>
									</li>
								))
							) : (
								<li><span className="dropdown-item">No favorites yet</span></li>
							)
						}
						
					</ul>
				</div>
			</div>
		</nav>
	);
};