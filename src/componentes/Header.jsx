import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <nav>
          <img src="../src/assets/img/logo.jpg" className='logo'/>
            <ul>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/clientes'}>Clientes</Link>
                <Link to={'/productos'}>Productos</Link>
                <Link to={'/proveedores'}>Proveedores</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header