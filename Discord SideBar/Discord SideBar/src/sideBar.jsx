// import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
// import { FaFire, FaPoo } from 'react-icons/fa';

let SideBar =()=>{
    return(
        <>
        <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-gray-900 text-white shadow-lg">
            {/* <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i> */}
           <SideIcons icon={"+"}/>
           <SideIcons icon={"A"}/>
           <SideIcons icon={"B"} />
           <SideIcons icon={"C"} />
           <SideIcons icon={"D"} />
        
        </div>
        </>
    )
}

let SideIcons = ({icon})=>{
    return(
        <>
        <div className='sidebar-icon'>{icon}</div>
        </>
    )
}

export default SideBar