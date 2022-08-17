import '../ItemDetail/ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { NotificationContext } from '../../notifications/Notification';


const ItemDetail = ({id, name, img, stock, descripcion, price, category }) =>{

    const [quantity, setQuantity] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
   
    const quantityAdded = getProductQuantity(id)
  
    const handleOnAdd = (quantity) => {
        
        setNotification(`Se han agregado: ${quantity} ${name}.`, 'success', 2)
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
                        {quantity > 0 ? <Link to='/cart'>Ir al Carrito</Link> : <ItemCount stock={stock} initial={quantityAdded} onAdd={handleOnAdd}/>}
                        <div className='price'>
                          Precio: ${price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default ItemDetail