import '../CartWidget/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className='CartWidget'>
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"/>
            {quantity}
        </div>
    )

}

export default CartWidget