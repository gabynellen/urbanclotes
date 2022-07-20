import '../Navbar/Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='col-2 Name'>
                UrbanClotes
            </div>
            <div className='col-lg-4 col-sm-6 Option'>
                <button className='btn btn-primary'>Remeras</button>
                <button className='btn btn-primary'>Pantalones</button>
                <button className='btn btn-primary'>Buzos</button>
                <button className='btn btn-primary'>Contacto</button>
                <CartWidget/>
            </div>

        </nav>
        
    );
}

export default Navbar