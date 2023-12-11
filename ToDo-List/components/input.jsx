import { useState, useEffect } from "react"

// get data from local storage
function getDatafromLocalStorage(){
    const list  = localStorage.getItem("ToDolist Items")
    if(list){
        return JSON.parse(list)
    }else{
        return []
    }
}

export default function Input (){
    // state for input data
    const [data, setData] = useState("")
    // to store items
    const [items, setItems] = useState(getDatafromLocalStorage())
    // set index of item to be changed
    const [editlist, seteditlist] = useState("")
    // toggle button Add => Edit
    const [button,setbutton] = useState(false)
    // Add Data
    function additems(){
        if(!data){
            alert("Task should not be empty")
        }else if(data && button){
            setItems(
            items.map(item=>{
                if(item.id === editlist){
                    return {...item,name:data}
                }
                return item
            }))
            seteditlist("")
            setData("")
            setbutton(false)
        }
        else{
            const itemdata = {
                id: new Date().getTime().toString(),
                name: data
            }
            setItems([...items,itemdata])
        }
        setData("")
    }

    // Delete Data
    function delData(id){
        const updatedlist = items.filter((item)=>{
            return item.id !== id
        })
        setItems(updatedlist)
    }

    // edit data 
    function editData(id){
        // find the object by using id
        const list_to_edit = items.find((item)=>{
            return item.id === id
        })
        seteditlist(id)
        setData(list_to_edit.name)
        setbutton(true)
    }

    // adding data to local storage
    useEffect(()=>{
        localStorage.setItem("ToDolist Items",JSON.stringify(items))
    },[items])
    return(
        <>
        <div className="container">
            <h1 className="title">ToDo List</h1>
            <div className="input-container">
            <input type="text" className="input" placeholder={"Enter Task"} value={data} onChange={(e)=>{setData(e.target.value)}}/>
            <button className="button" onClick={additems}>{button ? "Edit":"Add"}</button>
            </div>
            <div className="items">
                {items.map((item)=>{
                    return(
                        <>
                        <div className="item" key={item.id}>
                    {item.name}
                    <div>
                    <button onClick={()=>delData(item.id)}>Remove</button>
                    <button onClick={()=>editData(item.id)}>Edit</button>
                    </div>
                </div>
                        </>
                    )
                })}
                
            </div>
            <button className="lastbtn" onClick={()=>setItems([])}><span>Remove Items</span></button>
        </div>
        </>
    )
}