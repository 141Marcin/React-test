import React, { Component } from 'react';

export class FirstComponent extends Component {
	render() {
		return (
			<div className="Menu">	
				<hr/>
				<ul>
					<li> <a href="#">Home</a> </li>
					<li> <a href="https://reactjs.org/docs/hello-world.html">Documentation</a> </li>
					<li> <a href="https://reactjs.org/">About React</a> </li>
				</ul>
			</div>
		);
	}
}


export default FirstComponent;