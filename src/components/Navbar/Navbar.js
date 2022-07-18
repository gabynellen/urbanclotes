import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <nav className='row Navbar'>
                <div className='col-2 Name'>
                    UrbanClotes
                </div>
                <div className='col-3 Option'>
                    <button className='btn btn-primary'>Remeras</button>
                    <button className='btn btn-primary'>Pantalones</button>
                    <button className='btn btn-primary'>Buzos</button>
                    <button className='btn btn-primary'>Contacto</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar