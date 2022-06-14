import React from 'react'
import { CabeceraContainer } from '../styles/styles'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

const Cabecera = ({productos}) => {
  
    return (
        <CabeceraContainer>
            <h1>Carrito de compras</h1>
            <p>Cantidad de productos: <span>{productos}</span></p> 
        </CabeceraContainer>
    )
}

export default Cabecera;