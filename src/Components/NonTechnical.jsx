import React from "react";
import NonTechnicalProblemsAccordian from "./NonTechnicalProblemsAccordian";

const NonTechnical = () => {
	return (
		<div>
			<h3>Resolving non-technical problems :</h3>
			<p>
				Problems like missing, damaged or duplicate items during purchase or
				Payment related issues like improper bill, wrongful deductions etc are
				some of the examples of non- technical problems that customers face.
			</p>
			<p>
				The ideal way to solve this is to reach out to the seller (e-commerce
				firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple
				etc.). However a customer’s voice can go unheard in a discussion with
				the other party. So to lend a strength to the customer’s voice, we do an
				instant analysis of his/ her complaint and share certain reports with
				him/ her which can help identify the merit of the complaint/ grievance.
			</p>
			<NonTechnicalProblemsAccordian />
		</div>
	);
};

export default NonTechnical;
