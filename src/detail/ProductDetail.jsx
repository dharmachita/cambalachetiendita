import {useContext} from 'react';
import {Context} from '../context/Context';
import {useEffect, useState} from 'react';

const ProductDetail = ({item}) => {

    const { 
        addToCart
    } = useContext(Context);

    const [contador, setContador] = useState(1)

    function suma() {
        if (contador>=5) {
            alert ('Llegaste al stock disponible')
        } else {
            setContador(contador + 1)
        }
    }

    function resta () {
        if (contador<=1){
            alert ('Stock minimo')
        } else {
            setContador(contador - 1)
        }
    }


    return (
        <article>
            <h1>{item.nombre}</h1>
            <p>El id de este producto es {item.id}</p>
            <img src={item.foto} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <div>
                <button onClick={() => resta() }>-</button>
                <span>{contador}</span>
                <button onClick={() => suma() } >+</button>
            </div>
            {<button onClick={()=>{addToCart(item,contador)}}>Agregar al carrito</button>}
        </article>
    )
}

export default ProductDetail;