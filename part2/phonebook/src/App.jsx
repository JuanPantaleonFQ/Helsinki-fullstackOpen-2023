import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) =>{
    setNewName(event.target.value)   
 }
 const stringChecker = () => {
  return persons.some((person) => person.name.includes(newName));
}

 const addPerson = (e) =>{
    e.preventDefault();
    if (newName && !stringChecker()) {
      const newP = {name: newName}
      setPersons(persons.concat(newP))
      
    }else{
      alert(newName + "is empty or already exist!");
    }    
    
 }

  return (
    <div >
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
         name: <input type='text' onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>          
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persona) => (<div key={persona.name}>{persona.name}<br/></div>))}      
      <div>debug: {newName}</div>
    </div>    
  )
}

export default App