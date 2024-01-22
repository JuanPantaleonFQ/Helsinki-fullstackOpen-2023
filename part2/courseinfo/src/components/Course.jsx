import React from "react"

const HeaderWritter = ({ prop }) => <h1>{prop}</h1>
const ParagrafWritter = ({ prop , number }) => <p>{prop} {number}</p> 


const ContentWritter = ({ part }) => {
   const total = part[0].exercises + part[1].exercises + part[2].exercises
    return(
        <div>
            <ParagrafWritter prop={part[0].name} number={part[0].exercises}/>
            <ParagrafWritter prop={part[1].name} number={part[1].exercises}/>
            <ParagrafWritter prop={part[2].name} number={part[2].exercises}/>
            <ParagrafWritter prop="Total of" number={total}/>
        </div>
    )
}

const Course = ({ course }) => {      
    return(
        <div>
            <HeaderWritter prop={course.name}/>
            <ContentWritter part={course.parts}/>                        
        </div>       
    )   
}

export default Course
