import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './componentes/vistas/Home'
import Clientes from './componentes/vistas/Clientes'
import Productos from './componentes/vistas/Productos'
import Proveedores from './componentes/vistas/Proveedores'


const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <h2>404 not found</h2>
},
{
  path: '/clientes',
  element: <Clientes />,
  errorElement: <h2>404 not found</h2>
},
{
  path: '/productos',
  element: <Productos />,
  errorElement: <h2>404 not found</h2>
},
{
  path: '/proveedores',
  element: <Proveedores />,
  errorElement: <h2>404 not found</h2>
}
])

function App() {
  
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
