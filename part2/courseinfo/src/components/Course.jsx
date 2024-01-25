import React from "react"

const HeaderWritter = ({ prop }) => <h1>{prop.name}</h1>
const ParagrafWritter = ({ prop , number }) => <p>{prop} {number}</p> 


const ContentWritter = ({ part }) => { 
    const total = part.reduce((sum ,part)=> sum + part.exercises, 0)
    return(
        <div>
            <ParagrafWritter prop={part[0].name} number={part[0].exercises}/>
            <ParagrafWritter prop={part[1].name} number={part[1].exercises}/>
            <ParagrafWritter prop="Total of" number={total}/>
        </div>
    )
}

const Course = ({ course }) => {      
    return(
        <div>
            <HeaderWritter prop={course[0]}/>
            <ContentWritter part={course[0].parts}/>
            <HeaderWritter prop={course[1]}/>
            <ContentWritter part={course[1].parts}/>
                                  
        </div>       
    )   
}

export default Course
