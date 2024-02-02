import { useState } from "react"



const Filter = () =>{
    const [filterState,setNewfilterState] = useState('')

    const filterChanger = (event) => setNewfilterState(event.target.value)    
    
    return (

        <div>Filter: <input type="text" onChange={filterChanger}/></div>
    )
}
export default {Filter, filterState}
