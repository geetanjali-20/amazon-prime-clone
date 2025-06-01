import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieDetails from "../components/MovieDetails";
import RecommendedCarousel from "../components/RecommendedCarousel";
import Row from "../components/Row";
import requests from "../components/request"; 

const sampleMovie = {
	title: "The Tomorrow War",
	bannerImage: "/assets/banner.jpg",
	description: "Time travelers arrive from 2051 to recruit people...",
	longDescription: "In The Tomorrow War, the fate of humanity rests on...",
	year: 2021,
	duration: "2h 18m",
	genre: "Sci-fi",
};

const recommendedMovies = [
	{ id: 1, title: "Interstellar", thumbnail: "/assets/interstellar.jpg" },
	{ id: 2, title: "Inception", thumbnail: "/assets/inception.jpg" },
];

const MoviePage = () => (
	<div className="bg-[#0f171e] min-h-screen">
		<Navbar />
		<Banner />
		<Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
		<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		<Row title="Romentic Movies" fetchUrl={requests.fetchRomanceMovies} />
		<Row title="Documenteries" fetchUrl={requests.fetchDocumentries} />

		<MovieDetails movie={sampleMovie} />
		<RecommendedCarousel movies={recommendedMovies} />
	</div>
);

export default MoviePage;
