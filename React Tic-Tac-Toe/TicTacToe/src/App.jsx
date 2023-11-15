import { useState } from 'react'
import './App.css'

let SquareBox = ({value,handleClick})=>{

  return(
    <>
      <button className="box" onClick={handleClick}>{value}</button>
    </>
  )
}


function App() {
  let [value,setValue]=useState(Array(9).fill(null))
  let handleClick = (e)=>{
    let arrcopy = value.slice()
    arrcopy[e] = "X"
    setValue(arrcopy)
  }
  return (
    <>
    
      <h1>Tic-Tac-Toe</h1>
    <div className='rows'>
    <SquareBox value={value[0]} handleClick={()=>{handleClick(0)}}/>
    <SquareBox value={value[1]} handleClick={()=>{handleClick(1)}}/>
    <SquareBox value={value[2]} handleClick={()=>{handleClick(2)}}/>
    </div>
    <div className='rows'>
    <SquareBox value={value[3]} handleClick={()=>{handleClick(3)}}/>
    <SquareBox value={value[4]} handleClick={()=>{handleClick(4)}}/>
    <SquareBox value={value[5]} handleClick={()=>{handleClick(5)}}/>
    </div>
    <div className='rows'>
    <SquareBox value={value[6]} handleClick={()=>{handleClick(6)}}/>
    <SquareBox value={value[7]} handleClick={()=>{handleClick(7)}}/>
    <SquareBox value={value[8]} handleClick={()=>{handleClick(8)}}/>
    </div>
    </>
  )
}

export default App
