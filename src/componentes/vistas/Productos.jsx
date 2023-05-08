import {Link} from 'react-router-dom'
import Header from '../Header'

const Productos = () => {
  return (
    <main>
        <Header />
        <section className='fondo'>
        {
            Productos.map (producto => 
              // eslint-disable-next-line react/jsx-key
              <section className='card'>
                <img src="" alt="" />
                <section>
                  <p>{producto.nombre}</p>
                  <p>{producto.apellido}</p>
                </section>
              </section>
              
              
              
              )
          }
        </section>
    </main>
  )
}

export default Productos