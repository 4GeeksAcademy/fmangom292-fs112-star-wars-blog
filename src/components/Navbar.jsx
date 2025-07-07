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
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>

					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};