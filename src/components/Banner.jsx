import { useEffect, useState } from "react";
import blueLogo from "../assets/blueLogo.png";
import cart from "../assets/cart.svg";
import arrowButton from "../assets/right-arrow.png";
import addIcon from "../assets/add.svg";
import infoIcon from "../assets/info.svg";
import "../styles/Banner.less";
import axios from "./axios";
import requests from "./request";

function Banner() {
	const [movies, setMovies] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStartX, setTouchStartX] = useState(null);

	const movie = movies[currentIndex] || {};

	const truncateString = (string = "", maxLength = 50) => (string.length > maxLength ? `${string.substring(0, maxLength)}…` : string);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchTopRated);
			const values = request.data.results.slice(1, 7);
			setMovies(values || []);
			return request;
		}
		fetchData();
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
	};

	// Touch handlers for mobile swipe
	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		// Prevent scrolling while swiping
		if (touchStartX !== null) e.preventDefault();
	};

	const handleTouchEnd = (e) => {
		if (touchStartX === null) return;
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;
		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				handleNext(); // Swipe left
			} else {
				handlePrev(); // Swipe right
			}
		}
		setTouchStartX(null);
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: movie.backdrop_path ? `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")` : "none",
				backgroundPosition: "center center",
			}}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div className="banner__contents">
				<img loading="lazy" src={blueLogo} alt="Prime Video Logo" className="banner__logo" />
				<h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
				<div className="banner_trending">#{currentIndex + 1} in Worldwide</div>
				<h1 className="banner__description">{truncateString(movie.overview, 150)}</h1>

				<div className="banner__buttons">
					<button className="banner__button">
						Join Prime
						<br />
						Watch now
					</button>
					<div className="bannerIcons">
						<img src={addIcon} alt="add" className="addIcon" />
					</div>
					<div className="bannerIcons">
						<img src={infoIcon} alt="info" className="infoIcon" />
					</div>
				</div>
				<div className="watchprime">
					<img loading="lazy" src={cart} />
					Watch with a Prime membership
				</div>
				<div className="banner__carousel-controls">
					<button onClick={handlePrev} className="banner__carousel-btn">
						<img loading="lazy" src={arrowButton} className="leftArrow arrowIcon" />
					</button>

					<button onClick={handleNext} className="banner__carousel-btn">
						<img loading="lazy" src={arrowButton} className="arrowIcon" />
					</button>
				</div>
				<div className="banner__carousel-dots">
					{movies.map((_, idx) => (
						<span key={idx} className={`banner__dot${idx === currentIndex ? " active" : ""}`} onClick={() => setCurrentIndex(idx)} />
					))}
				</div>
			</div>
		</header>
	);
}

export default Banner;
