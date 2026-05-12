import { useState } from 'react'

const Person = ({person}) => {
  return <li>{person.name}: {person.number}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const isUniqueName = (person) => {
    return person.name != newName
  }
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    if(!persons.every(isUniqueName)){
      const alertString = newName +' is already added to phonebook'
      window.alert(alertString)
      return
    }

    const nameObj = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObj))
    setNewName('')

  }
  const changeName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  const addNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }
  const changeNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addInfo = (event) => {
    event.preventDefault()
    addName()
    addNumber()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div> name: <input value={newName} onChange = {changeName} /></div>
        <div> number: <input value={newNumber} onChange = {changeNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App