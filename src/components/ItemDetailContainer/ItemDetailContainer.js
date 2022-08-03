import '../ItemDetailContainer/ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { getProductById } from '../../AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
 
const ItemDetailContainer = ({greeting}) => {

    const [product, setProdut] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
 
    useEffect(()=>{
        getProductById(id).then(response =>{
            setProdut(response)
        }).catch(error =>{

        }).finally(() =>{
            setLoading(false)
        })
    }, [id])

    if(loading){
       return <h1>Cargando Producto...</h1>
    }

    return (
        <>
            <ItemDetail {...product} />
        </>
        
    )
}

export default ItemDetailContainer