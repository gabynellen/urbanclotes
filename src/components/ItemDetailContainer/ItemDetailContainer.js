import '../ItemDetailContainer/ItemDetailContainer.css'
import { useState, useEffect } from 'react';
//import { getProductById } from '../../AsyncMock';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/Firebase/index';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
 
const ItemDetailContainer = ({greeting}) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
 
    useEffect(()=>{

        getDoc(doc(db, 'products', productId)).then(response => {
            const values = response.data()
            const product = { id: response.id, ...values} 
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductById(id).then(response =>{
        //     setProdut(response)
        // }).catch(error =>{

        // }).finally(() =>{
        //     setLoading(false)
        // })
    }, [productId])

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