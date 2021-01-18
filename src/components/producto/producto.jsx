import {useEffect, useState} from 'react';
import './producto.css';
import { Link } from 'react-router-dom';


const Producto = ({titulo, precio, id}) => {

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
        <div className="producto">
            <img src="img/vela1.jpeg" alt="Vela de naranja y romero"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>

            <div>
                <button onClick={() => resta() }>-</button>
                <span>{contador}</span>
                <button onClick={() => suma() } >+</button>
            </div>

            <Link to={`detail/${id}`}>Ver detalle...</Link>
        </div>
    )
}

export default Producto; 

            