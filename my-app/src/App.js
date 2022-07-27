import {Component} from 'react';


import './App.css';


class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 40,
			text: '++++'
		}
	}

	nextYear = () => {
		//this.state.years++; - так мы изменить напрямую не МОЖЕМ! 
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	render() {
		const {name, surname, link} = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname}, age: {this.state.years} </h1>
				<a href={link}>My profile</a>
			</div>
		)
	}
}

function App() {
	return (
	  <div className="App">
			<WhoAmI name="Anna" surname="IV" link="#"/>
			<WhoAmI name="Andr" surname="Ivch" link="#"/>

	  </div>
	);
  }
  
  export default App;

// const Field = () => {
// 	const holder = 'Enter here';
// 	const styledField = {
// 		width: '300px'
// 	};
// 	return <input 
// 			placeholder={holder}
// 			type ="text"
// 			style={styledField}/>
// }

// class Field extends Component {
// 	render() {
// 		const holder = 'Enter here';
// 		const styledField = {
// 			width: '400px'
// 		};
// 		return <input 
// 				placeholder={holder}
// 				type ="text"
// 				style={styledField}/>
// 		}
// }

// function Btn() {
// 	const text = 'Log in'
// 	const logged = false;
// 	return <button>{logged ? 'Enter' : text}</button> 
// }

// export {Header};
