import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import dialpad from "../assets/dialpad.png";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import whiteLogo from "../assets/whiteLogo.png";
import "../styles/Navbar.less";

const navData = ["Home", "Movies", "TV shows", "Live TV"];

const Navbar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		// Function to handle scroll event
		window.addEventListener("scroll", () => {
			if (window.scrollY < 200) {
				handleShow(false);
			} else handleShow(true);
		});

		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);
	
	return (
		<header>
			<div className={`navbarSection ${show ? "newNavbar" : "transparentNavbar"}`}>
				<div className="tabs">
					<button className="primeVideo">prime video</button>
					{navData.map((item, index) => (
						<button href="#" key={index} className={`navButton ${item === "Movies" ? "active" : ""}`}>
							{item}
						</button>
					))}
					<div className="bar"></div>
					<button className="whitelogoButton">
						<img src={whiteLogo} alt="whiteLogo" className="" style={{ height: "28px", width: "47px" }} />
					</button>
					<button className="">
						<img src={menu} className="navIcons" style={{ height: "24px", width: "24px" }} />
						Subscriptions
					</button>
				</div>
				<div className="navRight">
					<img src={search} className="navIcons" />
					<div className="lang">
						<span>
							EN
							<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.643 9.069 C 6.113 9.256,5.857 9.918,6.113 10.444 C 6.174 10.570,6.942 11.363,8.829 13.245 C 11.219 15.629,11.478 15.876,11.657 15.935 C 11.906 16.017,12.094 16.017,12.343 15.935 C 12.522 15.876,12.781 15.629,15.171 13.245 C 18.046 10.377,18.001 10.429,17.999 9.982 C 17.998 9.669,17.903 9.462,17.661 9.249 C 17.449 9.062,17.278 9.000,16.980 9.001 C 16.582 9.002,16.576 9.008,14.210 11.371 L 12.000 13.579 9.770 11.354 C 7.753 9.343,7.521 9.124,7.343 9.065 C 7.101 8.985,6.876 8.986,6.643 9.069 "
									fill="currentColor"
									stroke="none"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
					<img src={dialpad} className="navIcons" />
					<img src={avatar} className="avatar" />
					<button className="join">Join Prime </button>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
