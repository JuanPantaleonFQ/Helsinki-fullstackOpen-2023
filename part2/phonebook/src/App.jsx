import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone] = useState(0)

const handleNameChange = (event) =>{
    setNewName(event.target.value)   
}
const handlePhoneChange = (event) =>{
   setNewPhone(event.target.value)   
}
 const stringChecker = () => {
  return persons.some((person) => person.name.includes(newName));
}

 const addPerson = (e) =>{
    e.preventDefault();
    if (newName && !stringChecker()) {
      const newP = {name: newName,
                    phone: newPhone}
      setPersons(persons.concat(newP))
      
    }else{
      alert(newName + " is empty or already exist!");
    }    
    
 }

  return (
    <div >
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
         name: <input type='text' onChange={handleNameChange}/>
        </div>
        <div>
         Phone: <input type='text' onChange={handlePhoneChange}/>
        </div>
        <div><button type="submit">add</button></div>  
      </form>
      <h2>Numbers</h2>
      {persons.map((persona) => (<div key={persona.name}>{persona.name}  {persona.phone}<br/></div>))}      
      <div><br></br>Debug {newName}</div>
    </div>    
  )
}

export default App