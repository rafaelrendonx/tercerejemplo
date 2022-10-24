
const Filter = (props) => {

    const {filtro, handleCambioFiltro} = props
  
    return(
        <>
            <div>
                Filter shown with <input value = {filtro} onChange = {handleCambioFiltro}/>
            </div>
        </>
    )
  }

export default Filter