
import Header from '../Header'

const proveedores = [
  {
      "id": 1,
      "nombre": "ACME Corp",
      "direccion": "123 Main St",
      "telefono": "555-1234"
  },
  {
      "id": 2,
      "nombre": "XYZ Inc",
      "direccion": "456 Oak St",
      "telefono": "555-5678"
  }
]

const Proveedores = () => {
  return (
    <main>
        <Header />
        <section className='fondo'>
        {
            proveedores.map((proveedor)=>(
              // eslint-disable-next-line react/jsx-key
                <section className='card'>
                    <p>{proveedor.nombre}</p>
                    <p>{proveedor.direccion}</p>
                    <p>{proveedor.telefono}</p>
                </section>
            ))
        }
        </section>
    </main>
  )
}

export default Proveedores