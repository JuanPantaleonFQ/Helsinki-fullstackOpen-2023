import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  //states
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone] = useState(0)
  const [filterState,setNewfilterState] = useState('')
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)   
  }
  const handlePhoneChange = (event) =>{
    setNewPhone(event.target.value)   
  }
  const filterChanger = (event) =>{   
    setNewfilterState(event.target.value)

  }
   const stringChecker = (prop) => {
    return
  }

 const addPerson = (e) =>{
    e.preventDefault();
    if (newName && !(persons.some((person) => person.name.includes(newName)))) {
      if (newPhone == 0) {
        const newP = {name: newName,
          phone: "    {None}"}
          setPersons(persons.concat(newP))
      }else{
        const newP = {name: newName,
          phone: newPhone}
          setPersons(persons.concat(newP))
      }
      
      
    }else{
      alert(newName + " is empty or already exist!");
    }       
  }

  return (
    <div >
      <h2>Phonebook</h2>
      <div>Filter: <input type="text" onChange={filterChanger}/></div>
      <h2><br></br>Add new:</h2>
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
      {persons.filter(person => person.name.toLowerCase().includes(filterState.toLowerCase())).map(persona => (
        <div key={persona.name}>{persona.name} {persona.phone}<br/></div>
        ))}

      <div><br></br>Debug {filterState}</div>
    </div>    
  )
}

export default App