export default function Navbar({filteritem, MenuList}){
    return(
        <>
        <div className="navbar">
            <h2>Choose Time</h2>
                <ul className="nav-items">
                    {
                        MenuList.map(data=>{
                            return(
                                <>
                                <button className="item"  onClick={()=>filteritem(data)}>{data}</button>
                                </>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </>
    )
}