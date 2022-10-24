//EJERCICIO11
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

let contador = 0

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filtro, setFiltro ] = useState('')

  useEffect( () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])
 

  const addName = (event) => {
    
    let repetidor
    contador = contador + 1

    event.preventDefault()

    const nameObject = {
      name : newName,
      number: newNumber,
      id : persons.length + 1
    }

    //primer nombre
    if (contador === 1) {
      setPersons(persons.concat(nameObject))
      contador = contador + 1
    }

    persons.forEach(element => {
      if (newName === element.name) {
        alert(`${newName} is already added to phonebook.`)
        repetidor = true
        setNewName("")
        setNewNumber("")
      }   
    })

    if (repetidor === true) {
      return
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewNumber("")
    }
  }

  

  const handleCambioNombre = (event) => {
    setNewName(event.target.value)
  }

  const handleCambioNumero = (event) => {
    setNewNumber(event.target.value)
  }

  const handleCambioFiltro = (event) => {
    setFiltro(event.target.value)
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filtro = {filtro} handleCambioFiltro = {handleCambioFiltro}/>
      <h2>Add a new</h2>
      <PersonForm addName = {addName} newName = {newName} newNumber = {newNumber} handleCambioNombre = {handleCambioNombre} handleCambioNumero = {handleCambioNumero}/>
      <h2>Numbers</h2>
      <Person persons = {persons} filtro = {filtro}/>
    </div>
  )
}

export default App