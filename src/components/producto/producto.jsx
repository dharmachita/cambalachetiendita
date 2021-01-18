import './producto.css';
import { Link } from 'react-router-dom';


const Producto = ({titulo, precio, id}) => {


    return (
        <div className="producto">
            <img src="img/vela1.jpeg" alt="Vela de naranja y romero"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>

            <Link to={`detail/${id}`}>Ver detalle...</Link>
        </div>
    )
}

export default Producto; 

            