
import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <div className="InfoCartItem">
                    Cantidad: {quantity}
                </div>
                <div className="InfoCartItem">
                    Precio x Unidad: ${price}
                </div>
            </section>           
            <footer className='ContainerItemCartItem'>
                 <div className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </div>
                 <button className='btn btn-danger' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem