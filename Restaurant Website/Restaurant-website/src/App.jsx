import './App.css'
import Card from '../components/card'
import MenuData from '../components/menuAPI'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Title from '../components/title'


let catlist = [...new Set(MenuData.map(data=>{
  return data.category
}))]  
// here we app All as special category explicitly
// we can convert set into array in spread operator
catlist.unshift("All")
function App() {
    const [data,setData] = useState(MenuData)
    const filteritem = (category)=>{
      if(category == "All"){
        setData(MenuData)
        return
      }
         let categorylist = MenuData.filter(item=>{
            return item.category === category
        })
        setData(categorylist)
    }
    
  return (
    <>
    <Title /> 
     <Navbar filteritem={filteritem} MenuList={catlist}/>
    <div className='main'>
      {data.map((data)=>{
        return(
          <>
          <Card data = {data} />
          </>
        )
          
      })}
      
      
      </div>
    </>
  )
}

export default App
