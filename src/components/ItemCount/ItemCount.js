import '../ItemCount/ItemCount.css';
import { useState, useEffect } from 'react';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(1)

    // useEffect(()=> {

    // }, [show])

    const decrement = () => {
        if(count > initial ){
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
                <p>{count}</p>
            </div>
            <div className='row'>
                <div className='col-4 botones mb-3'>
                    <button className='btn btn-primary boton' onClick={decrement}>-</button>
                    <button className='btn btn-primary' onClick={increment}>+</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <button className='btn btn-outline-primary'>Agregar al Carrito</button>
                </div>
            </div>

            
        </div>
    )
}

export default ItemCount