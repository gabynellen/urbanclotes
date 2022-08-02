import '../ItemDetail/ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({product}) =>{
    return(

        <div className='item'>
            <div className="cardDetail">
                <div className="tittleDetail" key={product.id}>
                    {product.name}
                </div>
                <div className="imgdetail">
                    <img src={product.img}></img>
                    <p>
                        {product.descripcion}
                    </p>
                </div>
                <div className="stockDetail">
                    Stock <FontAwesomeIcon icon={faCartShopping} color="black"/>: {product.stock}
                </div>
            </div>
        </div>
        
    )

}

export default ItemDetail