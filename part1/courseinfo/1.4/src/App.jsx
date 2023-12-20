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

const Total = ({parts}) =>{
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return(
    <p>Number of excersises: {total}</p>
  )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts}/>
      </div>
      
    )
}






export default App
