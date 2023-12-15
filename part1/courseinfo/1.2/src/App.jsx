import { useState } from 'react'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 
  
   return (
      <div>
        <center>
          <Header course={course}/>
          <Content part={part1} ex={exercises1}part2={part2} ex2={exercises2}part3={part3} ex3={exercises3}/>
          <Total ex={exercises1} ex2={exercises2} ex3={exercises3}/>
        </center>
        
      </div>
   )
  
  
}

//First component
const Header = (prop) =>{
  return(
    <div>
     <h1>{prop.course}</h1>
    </div>
  )  
}
//Second component
const Content = (prop) =>{
  return(
    <div>
      <p>{prop.part} {prop.ex}</p>
      <p>{prop.part2} {prop.ex2}</p> 
      <p>{prop.part3} {prop.ex3}</p>            
    </div>
  )
}
//third component
const Total = (prop) =>{
  const total = prop.ex+ prop.ex2+ prop.ex3
  return(
    <div>
       <p>Number of excersices {total}</p>           
    </div>
  )
}

export default App
