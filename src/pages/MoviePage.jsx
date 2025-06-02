import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";

const MoviePage = () => (
	<div className="moviePage">
		<Navbar />
		<Banner />
		<MovieDetails />
		<Footer />
	</div>
);

export default MoviePage;
