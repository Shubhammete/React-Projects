import { useState } from 'react'
import './App.css'

let SquareBox = ()=>{
  // creating state which is independent of other blocks
let [value,setValue]=useState("")
let handleClick = ()=>{
  setValue(value="X")
}
  return(
    <>
      <button className="box" onClick={handleClick}>{value}</button>
    </>
  )
}


function App() {

  return (
    <>
    
      <h1>Tic-Tac-Toe</h1>
    <div className='rows'>
    <SquareBox />
    <SquareBox />
    <SquareBox />
    </div>
    <div className='rows'>
    <SquareBox />
    <SquareBox />
    <SquareBox />
    </div>
    <div className='rows'>
    <SquareBox />
    <SquareBox />
    <SquareBox />
    </div>
    </>
  )
}

export default App
