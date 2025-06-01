// import React, { useState, useEffect } from "react";
// import axios from "./axios";
// import requests from "./request";
// import "../styles/Banner.less";

// function Banner() {
// 	const [movie, setMovie] = useState([]);

// 	useEffect(() => {
// 		async function fetchData() {
// 			const request = await axios.get(requests.fetchNetflixOriginals);
// 			setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      
// 			console.log("banner movie all", request.data.results);
// 			return request;
// 		}

// 		fetchData();
// 	}, []);

// 	console.log("banner movie", movie);

// 	const truncateString = (string = "", maxLength = 50) => (string.length > maxLength ? `${string.substring(0, maxLength)}…` : string);

// 	return (
// 		<header
// 			className="banner"
// 			style={{
// 				backgroundSize: "cover",
// 				backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
// 				backgroundPosition: "center center",
// 			}}
// 		>
// 			<div className="banner__contents">
// 				<h1 className="banner__title">{movie.title || movie.name || movie.orignal_name}</h1>
// 				<div className="banner__buttons">
// 					<button className="banner__button">Play</button>
// 					<button className="banner__button">MyList</button>
// 				</div>

// 				<h1 className="banner__description">{truncateString(movie.overview, 150)}</h1>
// 			</div>
// 		</header>
// 	);
// }

// export default Banner;


import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "../styles/Banner.less";
import arrowButton from "../assets/right-arrow.png"
import cart from "../assets/cart.svg"
import blueLogo from "../assets/blueLogo.png"

function Banner() {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const values = request.data.results.slice(0, 6);
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

    const movie = movies[currentIndex] || {};

    const truncateString = (string = "", maxLength = 50) =>
        string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: movie.backdrop_path
                    ? `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`
                    : "none",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <img src={blueLogo} alt="Prime Video Logo" className="banner__logo" />
                <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
                <div className="banner_trending">#{currentIndex + 1} in India</div>
                <h1 className="banner__description">{truncateString(movie.overview, 150)}</h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Join Prime<br/>Watch now</button>
                    {/* <button className="banner__button">My List</button> */}
                </div>
                <div className="watchprime"><img src={cart} />Watch with a Prime membership</div>
                <div className="banner__carousel-controls">
                    <button onClick={handlePrev} className="banner__carousel-btn"><img src={arrowButton} className="leftArrow arrowIcon"/></button>
                    {/* <span>{currentIndex + 1} / {movies.length}</span> */}
                    <button onClick={handleNext} className="banner__carousel-btn"><img src={arrowButton} className="arrowIcon"/></button>
                </div>
                 <div className="banner__carousel-dots">
                    {movies.map((_, idx) => (
                        <span
                            key={idx}
                            className={`banner__dot${idx === currentIndex ? " active" : ""}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Banner;
