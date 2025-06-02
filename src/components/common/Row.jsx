import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../../styles/Row.css";
import whitelogo from "../../assets/whiteLogo.png";
import cart from "../../assets/cart.svg";

const baseurl = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Fetching data from the API using axios
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request.data.results);

			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div>
			<div className="row">
				<h2 className="movieTitle">
					{title}
					<div className="seeMore">
						<span>See more</span>
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
							<title>Link Arrow</title>
							<path stroke="currentColor" stroke-width="2" d="M9.5 17.5l5-5-5-5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</div>
				</h2>
				<div className="row_posters">
					{movies.map((movie) => (
						<div className={`movieCard ${isLargeRow && "row_posterLarge"}`} key={movie.id} style={{ backgroundImage: `url(${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path})` }}>
							<div className="movieCardOverlay">
								<img loading="lazy" src={cart} className="cart" />
								<img loading="lazy" src={whitelogo} className="whitelogo" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Row;
