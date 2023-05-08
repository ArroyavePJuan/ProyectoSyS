
import Header from '../Header'

const productos = [
  {
      "id": 1,
      "nombre": "Laptop",
      "precio": 1000.00,
      "descripcion": "Computadora portátil"
  },
  {
      "id": 2,
      "nombre": "Teléfono",
      "precio": 500.00,
      "descripcion": "Teléfono móvil"
  }
]

const Productos = () => {
  return (
    <main>
        <Header />
        <section className='fondo'>
        {
            productos.map((producto)=>(
              // eslint-disable-next-line react/jsx-key
                <section className='card'>
                    <p>{producto.nombre}</p>
                    <p>{producto.descripcion}</p>
                    <p>{producto.precio}</p>
                </section>
            ))
        }
        </section>
    </main>
  )
}

export default Productos