import { useState } from 'react'
import './App.css'

let SquareBox = ({currentBox,handleClick})=>{

  return(
    <>
      <button className="box" onClick={handleClick}>{currentBox}</button>
    </>
  )
}

let Board = () =>{
  let [player,setPlayer] = useState(true)
  let [history,setHistory]=useState([Array(9).fill(null)])
  let currentBox = history[history.length -1]
 

  let handlePlay=(currentBox)=>{
    setPlayer(!player)
    setHistory([...history,currentBox])
  }
   return(
    <>
    <App player={player} currentBox = {currentBox} onPlay={handlePlay}/>
    
    </>
  )
}

function App({player,currentBox,onPlay}) {
  // keep track of player 
  
  // global state to change currentBoxs to "X" or "O" from null
  
  let handleClick = (e)=>{
    let arrcopy = currentBox.slice()
    // restrict updating box which has already updated
    if(currentBox[e] || calculateWinner(currentBox)){
      return
    }   
    // switching player
    if(player){
    arrcopy[e] = "X"
    }else{
      arrcopy[e] = "O"
    }
    onPlay(arrcopy)
  }
  // winner 
  let winner = calculateWinner(currentBox);
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
    <SquareBox currentBox={currentBox[0]} handleClick={()=>{handleClick(0)}}/>
    <SquareBox currentBox={currentBox[1]} handleClick={()=>{handleClick(1)}}/>
    <SquareBox currentBox={currentBox[2]} handleClick={()=>{handleClick(2)}}/>
    </div>
    <div className='rows'>
    <SquareBox currentBox={currentBox[3]} handleClick={()=>{handleClick(3)}}/>
    <SquareBox currentBox={currentBox[4]} handleClick={()=>{handleClick(4)}}/>
    <SquareBox currentBox={currentBox[5]} handleClick={()=>{handleClick(5)}}/>
    </div>
    <div className='rows'>
    <SquareBox currentBox={currentBox[6]} handleClick={()=>{handleClick(6)}}/>
    <SquareBox currentBox={currentBox[7]} handleClick={()=>{handleClick(7)}}/>
    <SquareBox currentBox={currentBox[8]} handleClick={()=>{handleClick(8)}}/>
    </div>
    </>
  )
}


function calculateWinner(currentBox) {
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
    if (currentBox[a] && currentBox[a] === currentBox[b] && currentBox[a] === currentBox[c]) {
      return currentBox[a];
    }
   
  }
  return null;

}


export default Board
