import '../ItemList/ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return (
        <div className='products'>
            {products.map(product => (
                <Item product={product}/>
            ))}
        </div>
    )

}

export default ItemList