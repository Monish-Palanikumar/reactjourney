import React, { Component } from 'react'

export class Tasks extends Component {
     render() {
          return (
               <div>
                    <h1>{this.props.title}</h1>
                    <h1>{this.props.name}</h1>
               </div>
          )
     }
}

export default Tasks
