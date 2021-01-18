import {useContext} from 'react';
import {Context} from '../../context/Context';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { items,
            setItems,
            addToCart,
            deleteItem,
            clear
        } = useContext(Context);

    return (
        <>
            <p>Carrito</p>
            <button onClick={clear}>Vaciar Carrito</button>
            <ul>
                {
                    items.items.map((item,index) => 
                    <li key={index}>
                        <CartItem key={index} item={item} />
                    </li>)

                }
            </ul>

        </>
    )
}

export default Cart;