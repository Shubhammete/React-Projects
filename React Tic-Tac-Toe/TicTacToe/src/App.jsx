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
  // keep track of player 
  let [player,setPlayer] = useState(true)
  // global state to change values to "X" or "O" from null
  let [value,setValue]=useState(Array(9).fill(null))
  let handleClick = (e)=>{
    let arrcopy = value.slice()
    // restrict updating box which has already updated
    if(value[e]){
      return
    }
    // switching player
    if(player){
    arrcopy[e] = "X"
    }else{
      arrcopy[e] = "O"
    }
    setValue(arrcopy)
    setPlayer(!player)
  }
  // winner
  let winner = calculateWinner(value);
  let status = null;
  if(winner){
    status = "Winner is "+ winner
  }else{
    status = "Next Player is "+ (player ? "X" : "O")
  }
  return (
    <>
    
      <h1>Tic-Tac-Toe</h1>
      <h1>{status}</h1>
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

function calculateWinner(value) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }
  return null;

}


export default App
