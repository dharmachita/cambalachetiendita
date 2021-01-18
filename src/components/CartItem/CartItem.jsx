import {useContext} from 'react';
import {Context} from '../../context/Context';

const CartItem = ({item}) => {
    const { 
        deleteItem
    } = useContext(Context);

    return (
        <>
            <h3>Producto: {item.nombre}</h3>
            <p>Cantidad: {item.cantidad}</p>
            {/*<button onClick={deleteItem}>Eliminar Producto</button>*/}
        </>
    )
}

export default CartItem;