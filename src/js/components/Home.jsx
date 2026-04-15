import React from "react";
import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Card from './card'

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card/>
		</div>
	);
};

export default Home;