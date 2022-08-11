import { useState, useEffect } from 'react';
import { getProducts,getProductByCategory } from '../../AsyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    const [products, setProduts] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{

        const AsyncFunction = categoryId ? getProductByCategory : getProducts

        AsyncFunction(categoryId).then(response =>{

            setProduts(response)
        }).catch(error =>{

        }).finally(()=>{
            setLoading(false)
        })


    }, [categoryId])

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