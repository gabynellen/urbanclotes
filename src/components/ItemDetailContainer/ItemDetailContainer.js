import '../ItemDetailContainer/ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { getProduct } from '../../AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({greeting}) => {

    const [product, setProdut] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(()=>{
        getProduct().then(response =>{
            setProdut(response)
        }).catch(error =>{

        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    if(loading){
       return <h1>Cargando Producto...</h1>
    }

    return (
        <>
            <ItemDetail className="itemDetail" product={product} />
        </>
        
    )
}

export default ItemDetailContainer