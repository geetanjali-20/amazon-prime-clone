import React, { Suspense, lazy } from "react";
import Loader from "../components/common/Loader";
const Banner = lazy(() => import("../components/Banner"));
const Footer = lazy(() => import("../components/Footer"));
const MovieDetails = lazy(() => import("../components/MovieDetails"));
const Navbar = lazy(() => import("../components/Navbar"));

const MoviePage = () => (
	<div className="moviePage">
		<Suspense fallback={<Loader />}>
			<Navbar />
		</Suspense>
		<Suspense fallback={<Loader />}>
			<Banner />
		</Suspense>
		<Suspense fallback={<Loader />}>
			<MovieDetails />
		</Suspense>
		<Suspense fallback={<Loader />}>
			<Footer />
		</Suspense>
	</div>
);

export default MoviePage;
