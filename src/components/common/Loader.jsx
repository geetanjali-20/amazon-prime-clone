import "../../App.css";

const Loader = ({ isMain = false }) => (
	<div className={`loader${isMain ? " loadermain" : ""}`}>
		<span className="loader__spinner"></span>
	</div>
);
export default Loader;
