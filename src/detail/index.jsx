import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';

const Detail = () => {
    /*Productos*/
    const productos = [
        {
            id: 1,
            nombre: 'vela 1',
            precio: 240,
            foto:'http://placehold.it/350x400'
        },

        {
            id: 2,
            nombre: 'vela 2',
            precio: 240,
            foto:'http://placehold.it/350x400'
        },

        {
            id: 3,
            nombre: 'vela 3',
            precio: 240,
            foto:'http://placehold.it/350x400'
        },

        {
            id: 4,
            nombre: 'vela 4',
            precio: 240,
            foto:'http://placehold.it/350x400'
        }
    ]
    
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod=>prod.id===parseInt(id)))
        }, 1500);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ProductDetail item={product} />

                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;