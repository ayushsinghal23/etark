import "./App.css";
import Navbar from "./Components/Navbar";
import NonTechnical from "./Components/NonTechnical";
import TechnicalProblems from "./Components/TechnicalProblems";

function App() {
	return (
		<>
		<Navbar />
		<div className="app-wrapper">
		<div className="App">
			
			<div>
				<h1>About Us</h1>
				<p>
					ETark is an automated complaint resolution platform for smartphone
					complaints. We help in resolving both technical and non-technical
					smartphone problems via. our service offerings. ETark was
					conceptualized after identifying the plight of hapless smartphone
					customers and the inefficiency of the service centers. 
				</p>
        <p>How ETark helps
					customers?</p>
          <TechnicalProblems/>
          <NonTechnical/>
			</div>
		</div>
		</div>
		</>
	);
}

export default App;
