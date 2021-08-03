import React from "react";
import etarkLogo from "../assets/etark.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
	btn: {
		minWidth: "0px",
	},
}));
const Navbar = () => {
	const classes = useStyles();
	return (
		<nav className="nav-bar">
			<figure>
				<img src={etarkLogo} alt="etark" className="image" />
			</figure>
			<main>
				<span>HOW TO USE</span> <span>ABOUT US</span> <span>CONTACT US</span>
			</main>
			<aside>
				<span>LOGIN</span>
				<span>
					<Button variant="contained" color="primary" className={classes.btn}>
						<p className="btn-text">GET STARTED</p>
					</Button>
				</span>
			</aside>
		</nav>
	);
};

export default Navbar;
