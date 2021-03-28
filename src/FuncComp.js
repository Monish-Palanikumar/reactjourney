// rfce->
import React from 'react'
// import "./styles/custom.css"

function FuncComp() {
     const styles = {
          borderRadius: '10px',
          width: '50%',
          backgroundColor: 'blue',
          textAlign: 'center',
          color: 'white',
          padding: '10px',
          margin: '20px'
     }
     return (
          <div style={styles}>
               Hello Functional Component
          </div>
     )
}

export default FuncComp
