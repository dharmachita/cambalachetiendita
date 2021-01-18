import {useContext} from 'react';
import {Context} from '../context/Context';

const ProductDetail = ({item}) => {

    const { 
        addToCart
    } = useContext(Context);

    return (
        <article>
            <h1>{item.nombre}</h1>
            <p>El id de este producto es {item.id}</p>
            <img src={item.foto} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            {/*<button onClick={addToCart(item)}>Agregar al carrito</button>*/}
        </article>
    )
}

export default ProductDetail;