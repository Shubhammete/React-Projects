import { useState } from "react"

let MainPage = ()=>{
    let [input,setInput] = useState('')
    return(
        <>
        <div className=' h-screen bg-gray-800 flex flex-col items-center '> 
        <h1 className="text-white  bg-gray-500 w-screen text-center h-16">#Server 1</h1>
        <input type='text' className='fixed bottom-8 right-14 bg-gray-500 pl-6 w-4/5 h-14 rounded-lg text-black' placeholder="Enter Message Here" onChange={(e)=>{setInput(e.target.value)}}></input>
        <button type='submit' className='fixed bottom-8 right-14 bg-black text-white p-3 rounded-lg' onClick={(e)=>{setInput(e.target.value=" ")}}>send</button>

        <Conversation input={input}/>
        </div>
        </>
    )
}
let Conversation = ({input})=>{

    return(
        <>
        <div>
            <time className='text-white'>12:30am</time>
            </div > 
            <div>               
                <div className=' fixed left-24 bg-black text-white p-4 rounded-3xl'>Hi how are you</div>
                <br />
                <div className=" fixed right-0  bg-black text-white p-4 rounded-3xl">{input}</div>
            </div>
            </>
       
        
    )
}



export default MainPage;