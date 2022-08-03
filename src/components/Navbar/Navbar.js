import '../Navbar/Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className='Navbar'>
            <div className='col-2'>
                <Link className="Name" to='/'>UrbanClotes</Link>
            </div>
            <div className='col-lg-4 col-sm-6 Option'>
                <Link to='category/remeras' className='btn btn-primary'>Remeras</Link>
                <Link to='category/pantalones' className='btn btn-primary'>Pantalones</Link>
                <Link to='category/buzos' className='btn btn-primary'>Buzos</Link>
                <CartWidget/>
            </div>

        </nav>
        
    );
}

export default Navbar