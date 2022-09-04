import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/Firebase/index'
import { NotificationContext } from '../../notifications/Notification';

const Checkout = () =>{

    const { cart, limpiarCarro, getTotal } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const crearOrden = async () =>{
        try {
            const fueraStock = []
            const batch = writeBatch(db)

            const objOrder = {
                comprador: {
                    name: document.getElementById('name').value,
                    phone: document.getElementById('phone').value,
                    email: document.getElementById('mail').value
                },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')

            const productsagregadosFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsagregadosFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    fueraStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(fueraStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const ordenAgregada = await addDoc(orderRef, objOrder)
                batch.commit()
                console.log(ordenAgregada.id)
                limpiarCarro()
                setNotification('Las Ordenes se generaron Correctamente', 'success', 2)
            } else {
                console.log('Hay productos fuera de stock')
                setNotification('Las Ordenes no pudieron generarse', 'error', 2)
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion createOrder')
        }

    }

    return (
        <div>
            <h1>
               Checkout
            </h1>
            <div className="row justify-content-center">
                <form className="col-lg-4 m-2">
                    <label>Nombre:</label>
                    <input className="form-control" id="name"/>
                    <label>Telefono:</label>
                    <input className="form-control" id="phone"/>
                    <label>email:</label>
                    <input className="form-control" id="mail"/>
                </form>
            </div>
            <div className="row">
                <div className="col-lg-4">
                   <button className="btn btn-primary" onClick={crearOrden}>Generar Orden</button>
                </div>
            </div>

        </div>
    )
}

export default Checkout