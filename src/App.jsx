import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";

function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MoviePage />} />
			</Routes>
		</Router>
	);
}
export default App;
