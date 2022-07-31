import { useState, useEffect } from 'react';
import { getProducts } from '../../AsyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

    const [products, setProduts] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(()=>{
        getProducts().then(response =>{
            setProduts(response)
        }).catch(error =>{

        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    if(loading){
       return <h1>Cargando Productos...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </>
        
    )
}

export default ItemListContainer