import { useState, useEffect } from 'react';
//import { getProducts,getProductByCategory } from '../../AsyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/Firebase/index';

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{

        setLoading(true)

        const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const productos = response.docs.map(doc => {
                const values = doc.data()
                return { id: doc.id, ...values}
            })
            setProductos(productos)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


    }, [categoryId])

    if(loading){
       return <h1>Cargando Productos...</h1>
    }

    if(productos.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={productos}></ItemList>
        </>
        
    )
}

export default ItemListContainer