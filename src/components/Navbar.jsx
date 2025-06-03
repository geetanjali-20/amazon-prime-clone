import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import dialpad from "../assets/dialpad.png";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import whiteLogo from "../assets/whiteLogo.png";
import dropdown from "../assets/dropdown.svg";
import "../styles/Navbar.less";

const navData = ["Home", "Movies", "TV shows", "Live TV"];

const Navbar = () => {
	const [show, handleShow] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY < 200) {
				handleShow(false);
			} else handleShow(true);
		};
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	const handleMenuClick = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	return (
		<header>
			<div className={`navbarSection ${show ? "newNavbar" : "transparentNavbar"}`}>
				<div className="tabs">
					<div className="menu" onClick={handleMenuClick}>
						<span>Menu</span>
						<img src={dropdown} className="dropdown" />
					</div>
					{/* Mobile dropdown menu */}
					{mobileMenuOpen && (
						<div className="mobileDropdown">
							{navData.map((item, index) => (
								<button key={index} className={`navButton ${item === "Movies" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
									{item}
								</button>
							))}
						</div>
					)}
					<button className="primeVideo">prime video</button>
					<div className="desktopNavButtons">
						{navData.map((item, index) => (
							<button href="#" key={index} className={`navButton ${item === "Movies" ? "active" : ""}`}>
								{item}
							</button>
						))}
					</div>
					<div className="bar"></div>
					<button className="whitelogoButton">
						<img loading="lazy" src={whiteLogo} alt="whiteLogo" className="" style={{ height: "28px", width: "47px" }} />
					</button>
					<button className="sub">
						<img loading="lazy" src={menu} className="navIcons" style={{ height: "24px", width: "24px" }} />
						Subscriptions
					</button>
				</div>
				<div className="navRight">
					<img loading="lazy" src={search} className="navIcons search" />
					<div className="lang">
						<span>
							EN
							<img src={dropdown} className="dropdown" />
						</span>
					</div>
					<img loading="lazy" src={dialpad} className="navIcons" />
					<img loading="lazy" src={avatar} className="avatar" />
					<button className="join">Join Prime </button>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
