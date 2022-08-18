import '../ItemDetailContainer/ItemDetailContainer.css'
import { useState, useEffect } from 'react';
//import { getProductById } from '../../AsyncMock';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/Firebase/index';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
 
const ItemDetailContainer = ({addItem}) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
 
    useEffect(() => {

        getDoc(doc(db, 'products', id)).then(response => {
            const values = response.data()

            const product = { id: response.id, ...values} 
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [id])

    if(loading){
       return <h1>Cargando Producto...</h1>
    }

    return (
        <>
            <ItemDetail {...product} addItem={addItem}/>
        </>
        
    )
}

export default ItemDetailContainer