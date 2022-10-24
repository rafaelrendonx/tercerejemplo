import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import { getAll, create, update, deletePerson } from './services/persons'
import './index.css'

const NotificacionError = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const NotificacionExito = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="exito">
      {message}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [exitoMessage, setExitoMessage] = useState('')

  const nameObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1
  }

  useEffect(() => {
    getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {

    let repetidor

    event.preventDefault()

    persons.forEach(element => {

      if (newName === element.name) {
        repetidor = true
        if (repetidor === true) {
          if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            setPersons([...persons, element.number = newNumber])
            console.log(element)
            update(element)
              .then(() => {
                //console.log(persons)
                setNewName("")
                setNewNumber("")
              })
              .then(()=> {
                setExitoMessage(
                  `${element.name} number was susscesfully updated.`
                )
                setTimeout(() => {
                  setExitoMessage(null)
                }, 3000)
              })
              .catch(() => {
                setErrorMessage(
                  `Information of ${element.name} has already been removed from server.`
                )
                setTimeout(() => {
                  setErrorMessage(null)
                }, 3000)
          })
        }
          else {
            return
          }
        }
      }
    })

    if (repetidor === true) {
      return
    }
    else {
      create(nameObject)
        .then(response => {
          setPersons([...persons, response.data])
          setNewName("")
          setNewNumber("")
        })
        .then(()=> {
          setExitoMessage(
            `Added ${nameObject.name}.`
          )
          setTimeout(() => {
            setExitoMessage(null)
          }, 3000)
        })
    }
  }

  const handleDeletePerson = (persona) => {
    if (window.confirm(`Delete ${persona.name} ?`)) {
      deletePerson(persona.id)
        .then(() => {
          setPersons(persons.filter(nombre => nombre.id !== persona.id))
        })
    }
    else {
      return
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
      <NotificacionExito message={exitoMessage} />
      <NotificacionError message={errorMessage} />
      <Filter filtro={filtro} handleCambioFiltro={handleCambioFiltro} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleCambioNombre={handleCambioNombre} handleCambioNumero={handleCambioNumero} />
      <h2>Numbers</h2>
      <Person persons={persons} filtro={filtro} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App