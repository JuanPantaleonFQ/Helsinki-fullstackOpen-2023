import { useState } from 'react'

const Display =({text})=>{  
  return (
    <p>{text}</p>
  )
}
const StatisticLine = ({text,value})=>{
  return(<p>{text} {value}</p>)    
}

const DisplayStatistics = (props) => {
  if(props.total == 0 ){
    return (
      <div>
        <p>Statistics</p>
        <p>No feedback given</p>
      </div>
    )
  }else{

  }
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value={props.total}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
    </div>
  )
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
      <DisplayStatistics good={goodState} neutral={neutralState} bad={badState} total={CalculateTotal} average={calculateAverage} positive={calculatePositive} />
    </div>
  )
}

export default App
