import { Link } from "react-router-dom";
import starWarsImageUrl from "../assets/img/star-wars.webp";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="star-wars-logo" src={starWarsImageUrl} alt="" srcSet="" />
					</span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					</div>
				</div>
			</div>
		</nav>
	);
};