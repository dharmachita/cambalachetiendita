import {useContext} from 'react';
import {Context} from '../../context/Context';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { items,
            clear
        } = useContext(Context);

    return (
        <>
            <p>Carrito</p>
            <p>La cantidad de elementos en el carrito es: <strong>{items.totalQty}</strong></p>
            <button onClick={clear}>Vaciar Carrito</button>
            <ul>
                {
                    items.itemsArr.map((item,index) => 
                    <li key={index}>
                        <CartItem key={index} item={item} />
                    </li>)

                }
            </ul>

        </>
    )
}

export default Cart;