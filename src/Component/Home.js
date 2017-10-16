import React, { Component } from 'react';

export class Home extends Component {
	render() {
		return (

		<div className="home_page">
			 <p id="strong_text">React is a JavaScript library for building user interfaces.</p>
			<p align="left">It's declarative: React uses a declarative paradigm that makes it easier to reason about your application.
				 It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. 
				 And it's flexible: React works with the libraries and frameworks that you already know.
			 </p>
			 <p align="left">To describe component's DOM representations, React uses an XML-like syntax called JSX. 
			 JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML.
			  A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.</p>


			</div>
		);
	}
}

export default Home;