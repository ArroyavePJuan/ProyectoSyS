
import Header from '../Header'

const clientes = [
  {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Pérez",
      "correo": "jperez@mail.com"
  },
  {
      "id": 2,
      "nombre": "María",
      "apellido": "González",
      "correo": "mgonzalez@mail.com"
  }
]


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
                  <p>{cliente.correo}</p>
                </section>
              </section>
              
              
              
              )
          }
            
        </section>
    </main>
  )
}

export default Clientes