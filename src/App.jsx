import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

function App() {
	// To simulate loading.
	const [loading, setLoading] = useState(true);

	  useEffect(() => {
	      const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loading
	      return () => clearTimeout(timer);
	  }, []);

	  if (loading) {
	      return <Loader isMain={true}/>;
	  }

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MoviePage />} />
			</Routes>
		</Router>
	);
}
export default App;
