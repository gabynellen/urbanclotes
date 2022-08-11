import '../ItemDetail/ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id, name, img, stock, descripcion, price, category }) =>{

    const [quantity, setQuantity] = useState(0)
    const {addItem} = useContext(CartContext)
    const [stockPro, setStock] = useState(stock)
   
  
    const handleOnAdd = (quantity) => {
      if(quantity <= stockPro){
        setStock(stockPro - quantity)
      }
      console.log('cantidad de items agregados', quantity)
      setQuantity(quantity)
      addItem({id, name, price, quantity})
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
                        {quantity > 0 ? <Link to='/cart'>Ir al Carrito</Link> : <ItemCount stock={stockPro} initial={1} onAdd={handleOnAdd}/>}
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