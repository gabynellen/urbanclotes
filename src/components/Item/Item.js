import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({name, id, img, stock}) =>{
    return(

        <div className="card">
            <div className="tittle">
                {name}
            </div>
            <div className="img">
                <img src={img} alt={name}></img>
            </div>
            <div className="btnDetail">
                <Link to={`detail/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
            <div className="stock">
                Stock: {stock}
            </div>
        </div>
        
    )
}

export default Item