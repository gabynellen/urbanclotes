import '../ItemDetail/ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({product}) =>{

    const [cantidad, setCantidad] = useState(0)
    const [stock, setStock] = useState(product.stock)
  
    const handleOnAdd = (quantity) => {
  
      if(quantity <= stock){
        console.log('cantidad de items agregados', quantity)
        setCantidad(cantidad + quantity)
        setStock(stock - quantity)
      }
    }

    return(

        <div className='item'>
            <div className="cardDetail">
                <div className="tittleDetail" key={product.id}>
                    {product.name}
                </div>
                <div className="imgdetail">
                    <img src={product.img}></img>
                    <div className='detail'>   
                        <p>
                            {product.descripcion}
                        </p>
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    </div>
                </div>
                <div className="stockDetail">
                    Stock <FontAwesomeIcon icon={faCartShopping} color="black"/>: {stock}
                </div>
            </div>
        </div>
        
    )

}

export default ItemDetail