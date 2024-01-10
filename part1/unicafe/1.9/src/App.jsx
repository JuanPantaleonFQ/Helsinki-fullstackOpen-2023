import { useState } from 'react'
import './App.css'


const Display =({text})=>{  
  return (
    <p>{text}</p>
  )
}
const DisplayStatistics = ({good,neutral,bad,total,average,positive}) => {
  if(total == 0){
    return(
      <div>
      <p>Statistics</p>
      <p>No feedback given</p>
      
      </div>
    )
  }else{
    return(
      <div>
      <p>Statistics</p>
      <p>Good {good}</p>
      <p>Nuetral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive}%</p>
      </div>    
    )
  }
  
}


function App() {  
  //Functions used for handle events of buttons
  const [goodState,setGoodState]= useState(0)
  const [neutralState,setNeutralState]= useState(0)
  const [badState,setBadState]= useState(0)
  const CalculateTotal = goodState +neutralState + badState
  const calculateAverage = (goodState-badState)/CalculateTotal
  const calculatePositive = (goodState/CalculateTotal) *100
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
      <DisplayStatistics good={goodState} neutral={neutralState} bad={badState} total={CalculateTotal} average={calculateAverage} positive={calculatePositive}/>
    </div>
  )
}

export default App
