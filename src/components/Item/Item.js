import '../Item/Item.css';

const Item = ({product}) =>{
    return(

        <div className="card">
            <div className="tittle" key={product.id}>
                {product.name}
            </div>
            <div className="img">
                <img src={product.img}></img>
            </div>
            <div className="btnDetail">
                <button className="btn btn-primary">Ver detalle</button>
            </div>
            <div className="stock">
                Stock: {product.stock}
            </div>
        </div>
        
    )
}

export default Item