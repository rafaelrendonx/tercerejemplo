const Person = (props) => {

  const {persons, filtro, handleDeletePerson} = props
  
  const filtrar = persons.filter(nombre => {
    if (filtro === '') {
      //console.log(persons)
      return nombre;
    }
    else {
      return nombre.name.includes(filtro) || nombre.name.toLowerCase().includes(filtro) || nombre.name.toUpperCase().includes(filtro)
    }
  })
  
  return (
    <>
      {filtrar.map(persons => { 
        console.log(persons.name)
        if (persons.name !== undefined) {
          return (
            <p key = {persons.id}>{persons.name} {persons.number} <button onClick={() => handleDeletePerson(persons)}>Delete</button></p>
          ) 
        }
      })}
    </>
  )

}

  export default Person