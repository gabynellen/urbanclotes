import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../CustomHook/useAsync';
import { getProducts } from '../../services/Firebase/firestore';


const ItemListContainer = ({greeting}) => {
    

    const {categoryId} = useParams()
    const { loading, products, error } = useAsync(() => getProducts(categoryId), [categoryId])


    if(loading){
       return <h1>Cargando Productos...</h1>
    }

    if(error){
        <h1>Hubo un Error.</h1>
    }

    if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </>
        
    )
}

export default ItemListContainer