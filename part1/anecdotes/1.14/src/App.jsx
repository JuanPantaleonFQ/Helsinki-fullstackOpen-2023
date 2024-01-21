import { useState } from 'react'
import './App.css'

const Heading = ({heading}) => <h2>{ heading }</h2>
const Paragraf = ( {text} ) => <p>{ text }</p>

const MostVotedText = ({ anecdotes , votes } ) => {
  const maxVotes = Math.max( ...votes )
  const mostVotedIndex = votes.indexOf(maxVotes) 
     
  if (maxVotes == 0) {
    return(
      <div>
        <p>No votes yet</p>
      </div>
    )
  }else{
    return(
      <Paragraf text= {anecdotes[mostVotedIndex]}/>
    )
  }
  
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))   
  //create an array of anecdotes.length size of ceros.
  const points = new Uint8Array(anecdotes.length); 
  
  //function that fives random numbers
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }  
  const buttonSelector = () =>{           
    setSelected(getRandomInt(0,7));
    
  }

  const addVoteButton = () => {           
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1   
    setVotes(updatedVotes)    
    console.log(votes)
  }

  
  return (    
    <div>      
      <Heading heading = 'Anecdote of the day'/>
      <Paragraf text = {anecdotes[selected]}/>            
      <button onClick={addVoteButton}>Vote</button>   
      <button onClick={buttonSelector}>Next anecdote</button>
      <Heading heading= 'Anecdote with most votes'/>
      <MostVotedText anecdotes = {anecdotes} votes ={votes}/>
    </div>
  )
}

export default App
