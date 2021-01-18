import { GrCart } from 'react-icons/gr'; 
import './navbar.css';
import NavItem from '../NavItem/navitem';
import {Link} from 'react-router-dom';


function Navbar({titulo, action}) {

    const menuItems = [
        {
            texto: 'Velas',
            ruta: '/categoria/velas',
        },
        {
            texto: 'Colitas',
            ruta: '/categoria/colitas',
        },
        {
            texto: 'Bee-wax wraps',
            ruta: '/categoria/wraps',
        },
        {
            texto: 'Pulseras',
            ruta: '/categoria/pulseras',
        }
    ]
 
    

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <div class="navbar">
                  <div class="left">
                    <Link to={'/'}><img src="img/leaves.png" alt="Logo de la marca, dos hojas que representan un corazon"/></Link>
                  </div>
                <div class="right">
                  <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                    <li><Link to={'/cart'}><GrCart /></Link></li>
                    
                  </ul>
                  
                </div>
              </div>
                
            </div>
        </nav>
    )
}


export default Navbar;