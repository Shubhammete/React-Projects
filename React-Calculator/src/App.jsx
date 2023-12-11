// import './App.css'
// import Display from '../components/display'
// import Buttons from '../components/buttons'

// function App() {
  

//   return (
//     <>
//     <div className="calculator-grid">
//       <div className="output">
//         <div className="previous-operand">
          
//         </div>
//         <div className="current-operand"></div>
//       </div>
//       <button
//         className="span-two"
        
//       >
//         AC
//       </button>
//       <button>
//         DEL
//       </button>
//       <button >÷</button>
//       <button >1</button>
//       <button >2</button>
//       <button >3</button>
//       <button >*</button>
//       <button >4</button>
//       <button >5</button>
//       <button >6</button>
//       <button >+</button>
//       <button >7</button>
//       <button >8</button>
//       <button >9</button>
//       <button >-</button>
//       <button >.</button>
//       <button >0</button>
//       <button className='span-two'>=</button>
      
//     </div>
//     </>
//   )
// }

// export default App
import { useReducer, useState } from "react"
function reducer(state,action){
  return
}
function App(){
    const [state, dispatch] = useReducer(reducer, [])
    const [item,setItem] = useState("")
    return(
        <>
        <form>
            <input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
            <buttom onClick={}></buttom>
        </form>
        </>
    )
}

export default App