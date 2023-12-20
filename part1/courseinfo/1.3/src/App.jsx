import { useState } from 'react'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}/>
      <PartReader name={part1.name} ex={part1.exercises}/>
      <PartReader name={part2.name} ex={part2.exercises}/>
      <PartReader name={part3.name} ex={part3.exercises}/>
    </div>
  )
}

const Header = (prop) =>{  
  return(
    <h1>{prop.courseName}</h1>
  )
}

const PartReader = ({name,ex})=>{   
  return(
    <h3>{name} {ex}</h3>
  )
}

export default App
