import '../ItemCount/ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock= 0, initial=1, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1 ){
            setCount(count -1)
        }
        
    }

    const increment = () => {
        if(count < stock){
            setCount(count +1)
        }
        
    }

    return (

        <div>
            <div className='row'>
                <div className='col-6 botones mb-3'>
                    <button className='btn btn-primary boton' onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button className='btn btn-primary boton' onClick={increment}>+</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <button className='btn btn-outline-primary' onClick={() =>onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>  
        </div>
    )
}

export default ItemCount