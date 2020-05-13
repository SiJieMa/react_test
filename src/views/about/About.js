import React from 'react';

const About = props => {
	return (
		<div className="shadow-radius">
			<h1 style={styles.title}>简介</h1>
			<h1 style={styles.title}>技术栈</h1>
			<ul style={styles.list}>
				<li>
					<a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank" rel="noopener noreferrer">
						Create React App
					</a>
				</li>
				<li>
					<a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">
						Ant Design
					</a>
				</li>
				<li>
					<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						React
					</a>
				</li>
				<li>
					<a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
						React-Router
					</a>
				</li>
				<li>
					<a href="https://react-redux.js.org" target="_blank" rel="noopener noreferrer">
						React-Redux
					</a>
				</li>
				<li>
					<a href="https://www.webpackjs.com" target="_blank" rel="noopener noreferrer">
						Webpack
					</a>
				</li>
				<li>
					<a href="http://es6.ruanyifeng.com" target="_blank" rel="noopener noreferrer">
						ECMAScript 6
					</a>
				</li>
				<li>
					<a href="https://babeljs.io" target="_blank" rel="noopener noreferrer">
						Babel
					</a>
				</li>
			</ul>



			<ul style={styles.list}>
				<li>
					<a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank" rel="noopener noreferrer">
						Create React App
					</a>
				</li>
				<li>
					<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						React
					</a>
				</li>
				<li>
					<a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">
						Ant Design
					</a>
				</li>
			</ul>

		</div>
	);
};

const styles = {
	title: {
		color: '#333'
	},
	list: {
		padding: 0,
		marginLeft: '40px',
		lineHeight: '2.2em'
	}
};

export default About;
