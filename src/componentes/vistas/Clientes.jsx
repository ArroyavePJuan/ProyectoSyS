import {Link} from 'react-router-dom'
import Header from '../Header'

import clientes from '../../assets/clientes.json'

const Clientes = () => {
  return (
    
    <main>
        <Header />
        <section className='fondo'>
          {
            clientes.map (cliente => 
              // eslint-disable-next-line react/jsx-key
              <section className='card'>
                <img src="" alt="" />
                <section>
                  <p>{cliente.nombre}</p>
                  <p>{cliente.apellido}</p>
                </section>
              </section>
              
              
              
              )
          }
            
        </section>
    </main>
  )
}

export default Clientes