import { useState } from 'react'
import './app.css'

const Display =({text})=>{  
  return (
    <p>{text}</p>
  )
}
const DisplayStatistics = ({good,neutral,bad,total}) => {
  return(
    <div>
    <p>Statistics</p>
    <p>Good {good}</p>
    <p>Nuetral {neutral}</p>
    <p>Bad {bad}</p>
    
    </div>
    
  )
}


function App() {  
  //Functions used for handle events of buttons
  const [goodState,setGoodState]= useState(0)
  const [neutralState,setNeutralState]= useState(0)
  const [badState,setBadState]= useState(0)
  

  const handleGood = () =>{
    setGoodState(goodState+1)
  }
  const handleNeutral = () =>{
    setNeutralState(neutralState+1)
  }
  const handleBad = () =>{
    setBadState(badState+1)
  }
   
  return (
    <div>
      <Display text={"Give feed back"}/>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <DisplayStatistics good={goodState} neutral={neutralState} bad={badState} />
    </div>
  )
}

export default App
