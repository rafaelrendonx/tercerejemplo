
const PersonForm = (props) => {

    const {addName, newName, newNumber, handleCambioNombre, handleCambioNumero} = props

return(
    <>
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
    </>
)

}



export default PersonForm