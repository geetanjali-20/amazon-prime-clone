import { Suspense, lazy, useEffect, useState } from "react";
import { rowsDataLarge } from "../configs/RowData";
import "../styles/MovieDetails.less";
import Loader from "./common/Loader";

// Lazy load the Row component
const Row = lazy(() => import("./common/Row"));

const ROWS_PER_PAGE = 15;

const MovieDetails = () => {
	const [page, setPage] = useState(1);

	const totalPages = Math.ceil(rowsDataLarge.length / ROWS_PER_PAGE);

	const getRowsForPage = (pageNum) => {
		const start = (pageNum - 1) * ROWS_PER_PAGE;
		const end = start + ROWS_PER_PAGE;
		return rowsDataLarge.slice(start, end);
	};

	const handlePrev = () => {
		if (page > 1) setPage(page - 1);
	};

	const handleNext = () => {
		if (page < totalPages) setPage(page + 1);
	};

	return (
		<div className="movieDetails">
			<h2 className="moviesHeading">Movies</h2>
			{getRowsForPage(page).map((row, id) => (
				<Suspense fallback={<Loader />} key={id + (page - 1) * ROWS_PER_PAGE}>
					<Row title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
				</Suspense>
			))}

			<div className="pagination-controls">
				<button onClick={handlePrev} disabled={page === 1} className="prev">
					Prev
				</button>
				<span>
					Page {page} of {totalPages}
				</span>
				<button onClick={handleNext} disabled={page === totalPages} className="next">
					Next
				</button>
			</div>
		</div>
	);
};

export default MovieDetails;
