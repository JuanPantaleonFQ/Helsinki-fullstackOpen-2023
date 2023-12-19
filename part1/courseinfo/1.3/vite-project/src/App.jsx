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
      <Header course={course} list={part2.name} />  
      <PartReader name={part1.name} ex={part1.exercises}/>
    </div>
  )
}

const Header = (prop) =>{  
  return(
    <h1>{prop.course}</h1>
  )
}

const PartReader = (prop)=>{  
  console.log(prop)  
  return(    
    <p>{prop.name} {prop.ex}</p>
  )  
}

export default App
