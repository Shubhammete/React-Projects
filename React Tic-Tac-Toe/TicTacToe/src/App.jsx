// import { useState } from 'react'
import './App.css'

let SquareBox = ({value})=>{
  return(
    <>
      <button className="box">X</button>
    </>
  )
}


function App() {

  return (
    <>
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
