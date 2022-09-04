import '../Navbar/Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { collection,  getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { db } from '../../services/Firebase/index'


const Navbar = () => {

    const [ menu, setMenu ] = useState([])

    useEffect(()=>{
        getDocs(collection(db, 'categorys')).then(response => {
            const categorias = response.docs.map(doc => {
                const values = doc.data()
                return <Link to={`category/${values.name}`} className='btn btn-primary'>{values.name}</Link>
            })
            setMenu(categorias)
        }).catch(error => {
            console.log(error)
        })
    },[])

    return (
        <nav className='Navbar'>
            <div className='col-2'>
                <Link className="Name" to='/'>UrbanClotes</Link>
            </div>
            <div className='col-lg-4 col-sm-6 Option'>
                <ul className='menu'>
                    {menu}
                </ul>
                <CartWidget/>
            </div>

        </nav>
        
    );
}

export default Navbar