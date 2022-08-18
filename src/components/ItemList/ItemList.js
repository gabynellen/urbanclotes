import '../ItemList/ItemList.css'
import Item from "../Item/Item"
import { memo } from 'react'

const ItemList = ({products}) =>{
    return (
        <div className='products'>
            {products.map(product => (
                <Item key={product.id} {...product}/>
            ))}
        </div>
    )

}

export default memo(ItemList)