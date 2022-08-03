import React, {Component} from 'react';
import styled from 'styled-components';


import './App.css';


class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 40,
			position: ''
		}
	}

	nextYear = () => {
		//this.state.years++; - так мы изменить напрямую не МОЖЕМ! 
		this.setState(state => ({
			years: state.years + 1
		}))
	}
	commitInputChanges =(e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		});
	}

	render() {
		const {name, surname, link} = this.props; //выносим отдельно для оптимизации кода
		const {position, years} = this.state;
		 
		console.log(this)

		return (
			<div>
				<button onClick={this.nextYear}>+++</button>
				<h1> My name is {name}, surname - {surname}, 
					age: {years}, 
					position: {position} 
				</h1>
				<a href={link}>My profile</a>
				<form >
					<span>Enter position</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</div>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 20px auto 0 auto;
	text-align: center;
`;

const DinamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 bprder border-' + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className:'shadow border rounded'})
				})
			}
		</div>
	)
}

function App() {
	return (
	  <Wrapper>
		<DinamicGreating color={'red'}>
			<h2>AC DC</h2>
			<h3>highway to hell</h3>
		</DinamicGreating>

			<WhoAmI name="Anna" surname="IV" link="#"/>
			<WhoAmI name="Andr" surname="Ivch" link="#"/>

	  </Wrapper>
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
