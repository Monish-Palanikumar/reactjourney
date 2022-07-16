import React,{useState} from 'react'

function sample() {
     var [count, setCount] = useState(0)
     return (
          <div>
               <button onclick={()=> setCount(count+1)}>count {count}</button>
          </div>
     )
}

export default sample
