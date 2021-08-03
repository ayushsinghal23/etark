import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Accordian.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginLeft: "3%",
		paddingBottom: "0px",
		padding: "16px",
	},
	heading: {
		color: "blue",
		fontSize: "1.2rem",
	},
	icon: {
		borderRadius: "50%",
		padding: "10px",
		background: "grey",
	},
}));

export default function NonTechnicalProblemsAccordian() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion className="accordian">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="expand-icon" />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography
						className={`${classes.heading} fontret`}
						component={"span"}
					>
						{" "}
						Chances of winning
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<p>
							Chances of winning tells you how likely you are to win in a
							consumer court had the complaint been filed there
						</p>
						<p>Or Alternatively,</p>
						<p>
							How likely you are to win in a negotiation with the other party
							(device manufacturer or seller) by quoting your winning chances in
							a consumer court as a reference
						</p>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion className="accordian">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="expand-icon" />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography
						className={`${classes.heading} fontret`}
						component={"span"}
					>
						{" "}
						Expected compensation
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<p>
							Expected compensation tells you what compensation (free servicing,
							product/ part replacement or monetary compensation) you are likely
							to get from the other party had your complaint been filed in a
							consumer court
						</p>
						<p>Or Alternatively,</p>
						<p>
							what compensation (free servicing, product/ part replacement) you
							are likely to get from the other party in a negotiation
						</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
