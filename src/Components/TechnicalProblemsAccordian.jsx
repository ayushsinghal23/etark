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

export default function TechnicalProblemsAccordian() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion className="accordian">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="expand-icon" />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					style={{ padding: "0px" }}
				>
					<Typography
						className={`${classes.heading} fontret`}
						component={"span"}
					>
						{" "}
						Visit an authorized service center
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<h4>
							While an authorized service center is always recommended, but as a
							user, you don’t know if:
						</h4>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								width: "100%",
							}}
						>
							<ol type="A">
								<li>
									Parts are available at the service center to service your
									device
								</li>
								<li>
									Your device would be considered within warranty by the service
									center
								</li>
								<li>
									The exact problem in your device and the price to be paid to
									fix that
								</li>
							</ol>
						</div>
						<p>
							All this demands you to visit the service center and wait in a
							queue with other customers which can often take hours with the
							possibility of parts not available or the device not considered
							within warranty by the service center or the quoted price of
							servicing out of your budget!
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
						Visit an unauthorized service center
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<h4>
							Although an unauthorized service center might seem light on your
							pocket, this route is never recommended because :
						</h4>
						<ul>
							<li>
								Due to the poor quality of servicing, they often result in
								frequent annual repairs for the same issue or some other problem
								thus making the actual cost of repair for that phone way higher
								than the cost of repair by an authorized service center
							</li>
							<li>
								Your personal data could be retrieved from your device even if
								you have removed the same from your device. So due to low
								accountability of unauthorized service centers, data could be
								stolen from your device during servicing.
							</li>
						</ul>
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
						Book for a home visit repair service
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<h4>
							Home visit repair services are quite popular nowadays due to the
							convenience of home repair that they promise but this should be
							avoided due to the following reasons:
						</h4>
						<ul>
							<li>
								Most of the home repair services don’t have any authorization
								from the device manufacture to provide servicing, thus the
								accountability and quality of servicing is low
							</li>
							<li>
								Many a times your device demands a part replacement which may
								not be available for the home visit repair agent at that point
								and post their inspection of the device at your location, they
								might take your device to their service center thus causing an
								additional delay in the servicing of the device
							</li>
						</ul>
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
						Device Insurance companies
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="accordian-details-style">
					<Typography component={"span"}>
						<p>
							The ideal way to solve this is to reach out to the seller
							(e-commerce firm/ offline retailer) or the device manufacturer
							(e.g. Samsung, Apple etc.). However a customer’s voice can go
							unheard in a discussion with the other party. So to lend a
							strength to the customer’s voice, we do an instant analysis of
							his/ her complaint and share certain reports with him/ her which
							can help identify the merit of the complaint/ grievance.
						</p>
						<p>All these approaches have their own share of flaws.</p>
						<p>
							{" "}
							ETark firmly believes that the best way to solve any technical
							issue is through authorized service centers only provided the
							inefficiencies of the service centers are removed and the customer
							doesn’t have to go through any hassle. This is exactly where we
							step in and we ensure that both the customer and the service
							center are seamlessly connected!
						</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
