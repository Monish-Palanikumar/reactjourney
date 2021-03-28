// import React from 'react';
// // import FuncComp from "./FuncComp"
// // import ClassComp from "./ClassComp"
// import Tasks from "./Tasks"
// import './App.css';

// function App() {
// 	return (
// 		<>
// 			{/* <FuncComp /> */}
// 			{/* <ClassComp /> */}
// 			<Tasks title="Task" />
// 		</>
// 	);
// }

// export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Axios from 'axios'
// import Simple from "./Simple"
import Todos from "./Todos/Todos"
import Add from "./Todos/Add"
import './App.css';
import { v4 as uuid } from 'uuid'
import About from "./Todos/About"
import axios from 'axios'
export class App extends Component {
	state = {
		todos: [
			// {
			// 	id: uuid(),
			// 	title: "complete 1",
			// 	completed: false
			// },
			// {
			// 	id: uuid(),
			// 	title: "complete 2",
			// 	completed: false
			// },
			// {
			// 	id: uuid(),
			// 	title: "complete 3",
			// 	completed: false
			// }

		]
	}
	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20").then(res => this.setState({ todos: res.data }))
	}
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id)
					todo.completed = !todo.completed
				return todo
			})
		})
	}
	delTask = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
			this.setState({
				todos: [...this.state.todos.filter(todo => todo.id !== id)]
			})
		})
		// this.setState({
		// 	todos: [...this.state.todos.filter(todo => todo.id !== id)]
		// })
	}
	addTodo = (title) => {
		// const newTodo = {
		// 	id: uuid(),
		// 	title: title,
		// 	completed: false
		// }
		axios.post("https://jsonplaceholder.typicode.com/todos?_limit=20", {
			id: uuid(),
			title,
			completed: false
		}).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
		// this.setState({ todos: [...this.state.todos, newTodo] })
		// console.log(title)
	}
	render() {
		// console.log(this.state.todos)
		return (
			<Router>
				<div>
					{/* <Simple title="Task" name="monish" /> */}
					<Route exact path="/" render={props => (
						<React.Fragment>
							<div className="container">
								<Todos todos={this.state.todos} markComplete={this.markComplete} delTask={this.delTask} />
								<Add addTodo={this.addTodo} />
							</div>
						</React.Fragment >
					)} />
					<Route path="/about" render={props => (
						<React.Fragment>
							<About />
						</React.Fragment>
					)} />
				</div>
			</Router >
		)
	}
}

export default App
