import React from "react";
import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Card from './card'
import Footer from './Footer'

//create your first component
const Home = () => {
	return (
		<div className = "text-center">
			<Navbar />
			<Jumbotron />
			<div className="card-container d-flex m-auto">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<div className = "position-static bottom start-50">
			<Footer/>
			</div>
		</div>
	);
};

export default Home;