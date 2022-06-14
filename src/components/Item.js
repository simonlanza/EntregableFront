import React, {useState} from 'react';
import { ItemContainer, ProductButton } from '../styles/styles';

const Item = ({aumentarTotal , nombre, descripcion, precio, img , itemStock}) => {
    const [stock, setStock] = useState(itemStock);

    const comprar = () => {
        setStock(stock - 1);
        aumentarTotal();
    }

    console.log(img)

    return (
        <ItemContainer>
            <h3>{nombre}</h3>
            <img src={img} alt='img' />
            <p>{descripcion}</p>
            <h4><span>{precio}</span></h4>
            <h5>Cantidad en stock: <span>{stock < 1 ? "Agotado" : stock }</span></h5>
            <ProductButton disabled={stock < 1} onClick={() => {comprar();}}>
                {stock <= 0 ? "Sin Stock" : "Comprar"}
            </ProductButton>
        </ItemContainer>
    )
}

export default Item;