/*
//EJERCICIO15
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

let contador = 0

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const addName = (event) => {

    let repetidor

    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
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
      axios
        .post('http://localhost:3001/persons', nameObject)
        .then(response => {
          setPersons([...persons, response.data])
          setNewName("")
          setNewNumber("")
        })
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
      <Filter filtro={filtro} handleCambioFiltro={handleCambioFiltro} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleCambioNombre={handleCambioNombre} handleCambioNumero={handleCambioNumero} />
      <h2>Numbers</h2>
      <Person persons={persons} filtro={filtro} />
    </div>
  )
}

export default App
*/

/*
//EJERCICIO16
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import { getAll, create } from './services/persons'

let contador = 0

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

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

 //console.log(getAll())


  const addName = (event) => {

    let repetidor

    event.preventDefault()

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
      create(nameObject)
        .then(response => {
          setPersons([...persons, response.data])
          setNewName("")
          setNewNumber("")
        })
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
      <Filter filtro={filtro} handleCambioFiltro={handleCambioFiltro} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleCambioNombre={handleCambioNombre} handleCambioNumero={handleCambioNumero} />
      <h2>Numbers</h2>
      <Person persons={persons} filtro={filtro} />
    </div>
  )
}

export default App
*/

/*
//EJERCICIO17
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import { getAll, create, deletePerson } from './services/persons'

const App = () => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

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
      create(nameObject)
        .then(response => {
          setPersons([...persons, response.data])
          setNewName("")
          setNewNumber("")
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
      <Filter filtro={filtro} handleCambioFiltro={handleCambioFiltro} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleCambioNombre={handleCambioNombre} handleCambioNumero={handleCambioNumero} />
      <h2>Numbers</h2>
      <Person persons={persons} filtro={filtro} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
  
*/

/*
//EJERCICIO18
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import { getAll, create, update, deletePerson } from './services/persons'

const App = () => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

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
            update(element)
            .then(() => {
              setNewName("")
              setNewNumber("")
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
      <Filter filtro={filtro} handleCambioFiltro={handleCambioFiltro} />
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleCambioNombre={handleCambioNombre} handleCambioNumero={handleCambioNumero} />
      <h2>Numbers</h2>
      <Person persons={persons} filtro={filtro} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
*/