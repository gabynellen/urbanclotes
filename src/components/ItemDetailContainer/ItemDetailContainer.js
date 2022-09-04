import '../ItemDetailContainer/ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { useAsync } from '../../CustomHook/useAsync';
import { getProduct } from '../../services/Firebase/firestore';
 
const ItemDetailContainer = ({addItem}) => {

    const {id} = useParams()
    const { loading, products , error } = useAsync(()=> getProduct(id), [id])
    
 

    if(loading){
       return <h1>Cargando Producto...</h1>
    }

    if(error){
        <h1>No se pudo cargar el producto</h1>
    }

    return (
        <>
            <ItemDetail {...products} addItem={addItem}/>
        </>
        
    )
}

export default ItemDetailContainer