import React from "react";
import "../styles/Footer.less";
import amazonLogo from "../assets/primeFooterLogo.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={amazonLogo} alt="Amazon Prime Video Logo" className="footer_logo" />
			<div className="footer_text">
				<ul>
					<li className="terms">Terms and Privacy Notice</li>
					<li className="terms">Send us feedback</li>
					<li className="terms">Help</li>
					<li className="years">© 1996-20XX, Amazon.com, Inc. or its affiliates</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
