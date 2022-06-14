// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React, {useState} from 'react';
import { ItemContainer, ProductButton } from '../styles/styles';

export default function Item({aumentarTotal , nombre, descripcion, itemStock}) {
    const [stock, setStock] = useState(itemStock);

    const comprar = () => {
        setStock(stock - 1);
        aumentarTotal();
    }

    return (
        <ItemContainer>
            {/* maquetar Item aquí */}
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <h5>Cantidad en stock: <span>{stock < 1 ? "Agotado" : stock }</span></h5>
            <ProductButton disabled={stock < 1} onClick={() => {comprar();}}>
                {stock <= 0 ? "Sin Stock" : "Comprar"}
            </ProductButton>
        </ItemContainer>
    )
}