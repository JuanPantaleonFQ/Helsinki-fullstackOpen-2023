import { useState } from 'react'

const Header = ({course}) =>{  
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )          
}

const Content = ({parts}) => {   
  return(
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>  
      <Part part={parts[2]}/>        
    </div>
  )
}

const Part = ({part}) =>{   
  return(
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      
    </div>
  )
}
export default App
