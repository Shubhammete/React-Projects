import { useReducer } from "react"
function Todo(){
    const [state, dispatch] = useReducer(reducer, [])
    return(
        <>
        <form>
            <input type="text" value={state}/>
        </form>
        </>
    )
}

