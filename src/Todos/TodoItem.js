import React, { Component } from 'react'
import PropTypes from "prop-types"

export class TodoItem extends Component {
     getStyle = () => {
          return {
               background: "silver",
               paddingLeft: "20px",
               margin: "20px",
               border: "3px dotted",
               textDecoration: this.props.todo.completed ? 'line-through' : 'none'
          }
     }
     //if we dont use arrow functions, we have to use bind
     //if we use arrow function, we dont need to use bind
     // markComplete(e) {
     //      console.log(this.props)
     // }
     render() {
          const { id, title } = this.props.todo
          return (
               <div style={this.getStyle()}>
                    <p>
                         <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
                         {title}
                         <button style={btnStyle} onClick={this.props.delTask.bind(this, id)}>x</button>
                    </p>
               </div>
          )
     }
}

const btnStyle = {
     background: 'red',
     borderRadius: '50%',
     color: 'white',
     padding: '5px 10px',
     cursor: 'pointer',
     float: 'right',
     marginRight: '10px',
     marginBottom: '10px'
}

TodoItem.propTypes = {
     todo: PropTypes.object.isRequired
}

export default TodoItem
