import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import FeatureA from "./FeatureA/FeatureA";
import FeatureB from "./FeatureB/FeatureB";
import Footer from "./Footer/Footer";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<FeatureA></FeatureA>
			<FeatureB></FeatureB>
			<Footer></Footer>
		</div>
	);
};

export default App;
