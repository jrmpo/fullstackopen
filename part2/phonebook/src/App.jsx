import { useState } from 'react'
import {Persons, Person}from "./components/Person"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const isUniqueName = (person) => {
    return person.name != newName
  }
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObj = {
      name: newName,
      number: newNumber
    }

    var newPersons = persons.concat(personObj)


    if(!persons.every(isUniqueName)){

      newPersons = persons.map(person =>
        person.name === newName ? personObj : person
      )

      const alertString = newName +' is already in phonebook, adding new number to their entry'
      window.alert(alertString)

      // // in this instance we will want to add the 'number' field to the already present name

      // return
    }

    setPersons(newPersons)
    setNewName('')
    setNewNumber('')

  }
  const changeName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  // const addNumber = (event) => {
  //   event.preventDefault()
  //   console.log('button clicked', event.target)
  // }
  const changeNumber = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  // const addInfo = (event) => {
  //   event.preventDefault()
  //   addName()
  //   addNumber()
  // }
  const searchName = (event) => {
    event.preventDefault()
    const updatedStr = event.target.value
    setNewSearch(updatedStr)
    console.log(newSearch);
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} searchFunc={searchName}/>
      <h2>Add New Contact</h2>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        changeName={changeName} 
        newNumber={newNumber} 
        changeNumber={changeNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={newSearch}/>
    </div>
  )
}

export default App