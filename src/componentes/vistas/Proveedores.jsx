import {Link} from 'react-router-dom'
import Header from '../Header'

const Proveedores = () => {
  return (
    <main>
        <Header />
        <section className='fondo'>
        {
            Proveedores.map (proveedor => 
              // eslint-disable-next-line react/jsx-key
              <section className='card'>
                <img src="" alt="" />
                <section>
                  <p>{proveedor.nombre}</p>
                  <p>{proveedor.apellido}</p>
                </section>
              </section>
              
              
              
              )
          }
        </section>
    </main>
  )
}

export default Proveedores