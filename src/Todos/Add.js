import React, { Component } from 'react'
import "../App.css"
export class Add extends Component {
     state = {
          title: ''
     }
     setVal = (e) => {
          // console.log(e.target.value)
          this.setState({ title: e.target.value })
     }
     onSubmit = (e) => {
          e.preventDefault();
          // console.log("Clicked")
          this.props.addTodo(this.state.title)
          this.setState({ title: '' })
     }
     render() {
          return (

               <form onSubmit={this.onSubmit} style={{ display: 'flex', margin:"30px", padding:"50px" }}>
                    <input
                         type="text"
                         name="title"
                         placeholder="add todo"
                         style={{ flex: '10', padding: '5px' }}
                         value={this.state.title}
                         onChange={this.setVal} />
                    <input
                         type="submit"
                         value="Submit"
                         className="btn"
                         style={{ flex: '1' }} />
               </form>
          )
     }
}

export default Add
