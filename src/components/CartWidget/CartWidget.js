import '../CartWidget/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {

    return (
        <div className='CartWidget'>
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"/>
            0
        </div>
    )

}

export default CartWidget