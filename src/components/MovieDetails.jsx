import { Suspense, lazy, useEffect, useState } from "react";
import rowsData from "../configs/RowData";
import "../styles/MovieDetails.less";
import Loader from "./common/Loader";

// Lazy load the Row component
const Row = lazy(() => import("./common/Row"));



const MovieDetails = () => {
	const [showSecondRows, setShowSecondRows] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSecondRows(true), 5000); // 5 seconds delay
        return () => clearTimeout(timer);
    }, []);

	return (
		<div className="movieDetails">
			<h2 className="moviesHeading">Movies</h2>
			{rowsData.map((row, id) => (
				<Suspense fallback={<Loader />} key={id}>
					<Row title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
				</Suspense>
			))}
			 {/* second api call */}
			{/* {rowsData.map((row, id) => (
				<Suspense fallback={<Loader />} key={id}>
					<Row title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
				</Suspense>
			))} */}

			 {showSecondRows
                ? rowsData.map((row, id) => (
                        <Suspense fallback={<Loader />} key={`second-${id}`}>
                            <Row title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
                        </Suspense>
                  ))
                : <Loader />}
		</div>
	);
};

export default MovieDetails;
