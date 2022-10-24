/*
//BASE
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
*/

/*
//EJERCICIO6
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name : newName,
      id : persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName("")
  }

  const handleCambio = (event) => {
    setNewName(event.target.value)
    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          Name: <input value = {newName} onChange = {handleCambio}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => (
        <p key = {persons.id}>{persons.name}</p>
      ))}
    </div>
  )
}

export default App
*/

/*
//EJERCICIO7
import React, { useState } from 'react'

let contador = 0

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    
    let repetidor
    contador = contador + 1

    event.preventDefault()
    const nameObject = {
      name : newName,
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
      }   
    })

    if (repetidor === true) {
      return
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName("")
    }
  }

  const handleCambio = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          Name: <input value = {newName} onChange = {handleCambio}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(persons => (
        <p key = {persons.id}>{persons.name}</p>
      ))}
    </div>
  )
}

export default App
*/

/*
//EJERCICIO8
import React, { useState } from 'react'

let contador = 0

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          Name:   <input value = {newName} onChange = {handleCambioNombre}/>
        </div>
        <div>
          Number: <input value = {newNumber} onChange = {handleCambioNumero}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => (
        <p key = {persons.id}>{persons.name} {persons.number}</p>
      ))}
    </div>
  )
}

export default App
*/

/*
//EJERCICIO9
import React, { useState } from 'react'

let contador = 0


const Numbers = (props) => {

  const {persons, filtro} = props

  const filtrar = persons.filter((nombre) => {
    if (filtro === '') {
      return nombre;
    }
    else {
      return nombre.name.includes(filtro) || nombre.name.toLowerCase().includes(filtro) || nombre.name.toUpperCase().includes(filtro)
    }
  })

    return(
      <>
        <h2>Numbers</h2>
        {filtrar.map(persons => (
          <p key = {persons.id}>{persons.name} {persons.number}</p>
        ))}
      </>
    )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filtro, setFiltro ] = useState('')

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
    var lowerCase = event.target.value.toLowerCase();
    setFiltro(event.target.value)
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
          Filter shown with <input value = {filtro} onChange = {handleCambioFiltro}/>
      </div>
      <form onSubmit = {addName}>
        <h2>Add a new</h2>
        <div>
          Name:   <input value = {newName} onChange = {handleCambioNombre}/>
        </div>
        <div>
          Number: <input value = {newNumber} onChange = {handleCambioNumero}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Numbers persons = {persons} filtro = {filtro}/>
    </div>
  )
}

export default App
*/

/*
//EJERCICIO10
import React, { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
let contador = 0


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filtro, setFiltro ] = useState('')
 

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
*/