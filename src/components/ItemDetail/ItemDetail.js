import '../ItemDetail/ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({id, name, img, stock, descripcion, price, category }) =>{

    const [cantidad, setCantidad] = useState(0)
    const [stockPro, setStock] = useState(stock)
  
    const handleOnAdd = (quantity) => {
      if(quantity <= stockPro){
        console.log('cantidad de items agregados', quantity)
        setCantidad(cantidad + quantity)
        setStock(stockPro - quantity)
      }
    }

    return(

        <div className='item'>
            <div className="cardDetail">
                <div className="tittleDetail" key={id}>
                    {name}
                </div>
                <div className="imgdetail">
                    <img src={img} alt={name}></img>
                    <div className='detail'>  
                        <p>
                            Categoria: {category}.
                        </p> 
                        <p>
                            descripcion: {descripcion}
                        </p>
                        <ItemCount stock={stockPro} initial={1} onAdd={handleOnAdd}/>
                        <div className='price'>
                          Precio: ${price}
                        </div>
                    </div>
                </div>
                <div className="stockDetail">
                    Stock <FontAwesomeIcon icon={faCartShopping} color="black"/>: {stockPro}
                </div>
            </div>
        </div>
        
    )

}

export default ItemDetail